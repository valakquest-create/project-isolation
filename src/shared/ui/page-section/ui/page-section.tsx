import { cn } from "../../utils";
import "./page-section.scss";

export function PageSection({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <section className={cn("section", className)}>
      <h2 className="section__title">{title}</h2>
      <p className="section__description">{description}</p>
    </section>
  );
}
