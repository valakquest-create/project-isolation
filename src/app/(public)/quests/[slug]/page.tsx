// eslint-disable-next-line import/no-internal-modules
import QuestPage from "@/app-pages/quest";

export default async function Quest({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <QuestPage slug={slug} />;
}
