import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const result = await fetch(
    `http://ip-api.com/json/${ip}?fields=city&lang=ru`,
  );
  const geoData = await result.json();

  return NextResponse.json(geoData);
}
