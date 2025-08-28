import { cn } from "../../utils";
import { CharacteristicsItem } from ".//characteristics-item";

import "./characteristics.scss";

export const Characteristics = ({
  items,
  singUp = true,
  className,
  additional = false,
}: {
  items: {
    title: string;
    content: React.ReactNode;
    info?: React.ReactNode;
    className?: string;
  }[];
  singUp?: boolean;
  className?: string;
  additional?: boolean;
}) => {
  return (
    <ul className={cn("characteristics", className)}>
      {items.map(({ title, content, info, className }, index) => {
        if (index === 3) {
          return singUp ? (
            <CharacteristicsItem
              key={index}
              title={title}
              content={content}
              info={info}
              className={className}
            />
          ) : null;
        }

        if (index > 3) {
          return additional ? (
            <CharacteristicsItem
              key={index}
              title={title}
              content={content}
              info={info}
              className={className}
            />
          ) : null;
        }

        return (
          <CharacteristicsItem
            key={index}
            title={title}
            content={content}
            info={info}
            className={className}
          />
        );
      })}
    </ul>
  );
};
