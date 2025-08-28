import { cn } from "../utils";

import "./scroll-down.scss";

export function ScrollDown({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return (
    <div className={cn("scroll-down", className)}>
      <div className="scroll-down__text">{text}</div>
      <div className="scroll-down__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256.286 408.357L16.333 138.548V104H496v36.45ZM56.892 136l199.466 224.287L457.042 136Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
