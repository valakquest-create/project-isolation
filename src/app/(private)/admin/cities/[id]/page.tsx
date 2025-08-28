import { City } from "@/app-pages";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <City id={parseInt(id)} />;
}
