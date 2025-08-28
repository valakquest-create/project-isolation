import { UpdateHoliday } from "@/app-pages";

export default async function UpdateHolidayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <UpdateHoliday id={parseInt(id)} />;
}
