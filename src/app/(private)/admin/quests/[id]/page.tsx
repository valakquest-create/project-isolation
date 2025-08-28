// eslint-disable-next-line import/no-internal-modules
import { AdminEditQuest } from "@/app-pages/admin-edit-quest";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <AdminEditQuest id={parseInt(id)} />;
}
