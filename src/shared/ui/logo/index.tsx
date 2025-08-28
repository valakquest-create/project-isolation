import Image from "next/image";
import Link from "next/link";

import "./logo.scss";
import logo from "./logo.png";

export function Logo() {
  return (
    <Link className="logo" href="/">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
