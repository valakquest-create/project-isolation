import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { nextAuthConfig } from "@/entities/session";
import { dbClient } from "@/shared/lib/db";

const { auth } = NextAuth(nextAuthConfig);

const DEFAULT_LIMIT = 3;
const DEFAULT_ORDER_BY = "createdAt-desc";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  if (!searchParams.has("cursor")) {
    const ordersWithQuests = await dbClient.order.findMany({
      include: {
        quest: {
          select: {
            name: true,
            address: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(ordersWithQuests);
  }

  // Cursor
  const rawCursor = searchParams.get("cursor");
  const cursor = rawCursor?.length
    ? JSON.parse(Buffer.from(rawCursor, "base64").toString("utf-8"))
    : null;

  // Limit
  const limit = +(searchParams.get("limit") || DEFAULT_LIMIT);

  // OrderBy
  const [sortField, sortOrder] = (
    searchParams.get("orderBy") || DEFAULT_ORDER_BY
  ).split("-") as ["createdAt" | "dateTime", "asc" | "desc"];

  // Filter
  const filter = searchParams.get("filter") || "all";

  const orders = await dbClient.order.findMany({
    include: {
      quest: {
        select: {
          name: true,
          address: true,
        },
      },
    },
    orderBy: {
      [sortField]: sortOrder,
    },
    where: buildWhereClause(filter),

    take: limit + 1,
    ...(cursor && {
      cursor,
      // skip: 1,
    }),
  });

  // Next cursor
  const hasNext = orders.length > limit;

  const nextCursor = hasNext
    ? generateNextCursor(orders[orders.length - 1], sortField)
    : null;

  return NextResponse.json({
    orders: hasNext ? orders.slice(0, -1) : orders,
    nextCursor,
  });
});

function buildWhereClause(filter: string) {
  const where: Record<string, boolean> = {};

  switch (filter) {
    case "pending": {
      where.confirmed = false;
      where.closed = false;

      break;
    }
    case "confirmed": {
      where.confirmed = true;

      break;
    }
    case "closed": {
      where.closed = true;

      break;
    }
  }

  return where;
}

function generateNextCursor<T extends { id: number }, K extends keyof T>(
  lastItem: T,
  sortField: K,
) {
  const cursorData = {
    [sortField]: lastItem[sortField],
    id: lastItem.id,
  };

  return Buffer.from(JSON.stringify(cursorData)).toString("base64");
}
