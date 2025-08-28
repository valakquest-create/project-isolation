import { cn } from "../../utils";

export function InfoBlock({
  isShown,
  position,
  children,
}: {
  isShown: boolean;
  position: {
    top?: number;
    left?: number;
  };
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("characteristics__info-block", {
        "characteristics__info-block_shown": isShown,
      })}
      style={position}
    >
      {children}
    </div>
  );
}
