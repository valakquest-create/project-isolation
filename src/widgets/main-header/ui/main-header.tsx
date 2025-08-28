import { ScrollDown } from "@/shared/ui/main-scroll-down";
import "./main-header.scss";

export function MainHeader() {
  return (
    <header className="main-header">
      <h1 className="main-header__name-quest">
        isolation <br /> quest
      </h1>
      <ScrollDown
        text="У тебя один час, чтобы выбраться"
        className="scroll-down_b10vh scroll-down_mt1em scroll-down_main"
      />
    </header>
  );
}
