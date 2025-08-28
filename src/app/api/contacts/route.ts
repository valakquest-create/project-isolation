import { dbClient } from "@/shared/lib/db";

export async function GET() {
  const contacts = await dbClient.contact.findMany();

  return Response.json(contacts);
}
