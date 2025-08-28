import { cn } from "@/shared/ui/utils";

import "./modal.scss";

export function Modal({
  children,
  isActive,
  setActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={cn("modal", isActive && "modal_active")}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
