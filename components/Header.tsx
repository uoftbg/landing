import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import Container from "./Container";
import Logo from "./Logo";
import NavLink from "./NavLink";

import Tilt from "react-parallax-tilt";
import SocialIcon from "./SocialIcon";

export default function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between items-center">
          <Link href="#" aria-label="home">
            <Tilt>
              <div className="flex flex-row space-x-5 items-center justify-center group">
                <Logo />
                <div
                  className="flex flex-col h-full items-start justify-center tracking-widest small-caps
                             group-hover:from-[#f9f871] group-hover:to-[#ffc75f] group-hover:via-[#ffc75f] group-hover:text-transparent
                             group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                >
                  <h2 className="text-xs font-light">University of Toronto</h2>
                  <h1 className="text-xl font-bold">Blockchain Group</h1>
                </div>
              </div>
            </Tilt>
          </Link>
          <div className="hidden md:flex md:gap-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#about">About us</NavLink>
            <NavLink href="#team">Contact</NavLink>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <div className="flex flex-row space-x-5 items-center justify-center text-white shadow-sm">
                <SocialIcon
                  href="https://instagram.com/uoftbg/"
                  icon={faInstagram}
                  className="hover:rotate-6"
                />
                <SocialIcon
                  href="https://www.linkedin.com/company/univeristy-of-toronto-blockchain-group?originalSubdomain=ca"
                  icon={faLinkedin}
                  className="hover:-rotate-6"
                />
                <SocialIcon
                  href="https://instagram.com/uoftbg/"
                  icon={faDiscord}
                  className="hover:rotate-6"
                />
              </div>
            </div>
            {/* <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div> */}
          </div>
        </nav>
      </Container>
    </header>
  );
}
