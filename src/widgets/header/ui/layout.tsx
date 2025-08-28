import "./layout.scss";

export function Layout({
  logo,
  menu,
  sideMenu,
  burger,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  location,
}: {
  logo: React.ReactNode;
  menu: React.ReactNode;
  sideMenu: React.ReactNode;
  burger: React.ReactNode;
  location: React.ReactNode;
}) {
  return (
    <>
      <header className="header">
        <div className="header__logo">{logo}</div>
        {menu}
        {/* <div className="header__location">{location}</div> */}
        <div className="header__burger">{burger}</div>
      </header>
      {sideMenu}
    </>
  );
}
