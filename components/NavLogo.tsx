import Link from "next/link";
import React from "react";

import Logo from "./Logo";
import LogoText from "./LogoText";
import ResponsiveTilt from "./ResponsiveTilt";

export default function NavLogo() {
  return (
    <Link href="/" aria-label="home">
      <a>
        <span className="sr-only">UofT Blockchain Group</span>
        <ResponsiveTilt>
          <div className="flex flex-row space-x-5 items-center justify-center group">
            <Logo />
            <LogoText />
          </div>
        </ResponsiveTilt>
      </a>
    </Link>
  );
}
