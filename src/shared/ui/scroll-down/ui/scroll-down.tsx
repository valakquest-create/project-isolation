import { cn } from "../../utils";
import { Icon } from "./icon";
import "./scroll-down.scss";

export function ScrollDown({
  className,
  text,
  isWrapped = true,
}: {
  className?: string;
  text?: string;
  isWrapped?: boolean;
}) {
  const Arrow = ({ className }: { className?: string }) => (
    <div className={cn("scroll-down", className)}>
      {text && <div className="scroll-down__text">{text}</div>}
      <div className="scroll-down__icon">
        <Icon />
      </div>
    </div>
  );

  return isWrapped ? (
    <div className={cn("scroll-down__wrapper", className)}>{<Arrow />}</div>
  ) : (
    <Arrow className={className} />
  );
}
