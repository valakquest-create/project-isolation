import "./quest-content.scss";

export function QuestContent({ page }: { page: QuestPage }) {
  return (
    <section className="description">
      <h1 className="description__slogan">{page.h1}</h1>
      <p className="description__paragraph">{page.content}</p>
    </section>
  );
}
