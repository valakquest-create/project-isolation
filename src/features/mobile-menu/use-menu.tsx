import { useContext } from "react";
import { MenuContext } from "./model/";

export function useMenu() {
  const { isActive, setActive } = useContext(MenuContext);

  return [isActive, setActive] as [typeof isActive, typeof setActive];
}
