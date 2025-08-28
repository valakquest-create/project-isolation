import { Location } from "@/features/location";
import { MenuContextProvider, Burger, SideMenu } from "@/features/mobile-menu";
import { Logo } from "@/shared/ui/logo";
import { Menu } from "@/shared/ui/menu";
import { Layout } from "./layout";

export function Header() {
  return (
    <MenuContextProvider>
      <Layout
        logo={<Logo />}
        menu={<Menu />}
        burger={<Burger />}
        sideMenu={<SideMenu />}
        location={<Location />}
      />
    </MenuContextProvider>
  );
}
