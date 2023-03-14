import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

import {
  faDiscord,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Container from "../components/Container";
import Logo from "../components/Logo";
import NavLink from "../components/NavLink";
import SocialIcon from "../components/SocialIcon";

const navigation = [
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/uoftbg/",
    icon: faInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/univeristy-of-toronto-blockchain-group?originalSubdomain=ca",
    icon: faLinkedin,
  },
  { name: "Discord", href: "https://discord.gg/wYGf57qb", icon: faDiscord },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          className="flex items-center justify-between p-6 lg:py-10 lg:px-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" aria-label="home">
              <a>
                <span className="sr-only">UofT Blockchain Group</span>
                <Tilt>
                  <div className="flex flex-row space-x-5 items-center justify-center group">
                    <Logo />
                    <div
                      className="flex flex-col h-full items-start justify-center tracking-widest uppercase text-white
                                    group-hover:from-[#f9f871] group-hover:to-[#ffc75f] group-hover:via-[#ffc75f] group-hover:text-transparent
                                    group-hover:bg-clip-text group-hover:bg-gradient-to-r"
                    >
                      <h2 className="text-xs font-light">
                        University of Toronto
                      </h2>
                      <h1 className="text-xl font-bold">Blockchain Group</h1>
                    </div>
                  </div>
                </Tilt>
              </a>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Navigation links */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          {/* Social links */}
          <div className="hidden lg:flex lg:flex-1 lg:space-x-5 lg:justify-end lg:items-center lg:shadow-sm">
            {socials.map((item) => (
              <SocialIcon key={item.name} href={item.href} icon={item.icon} />
            ))}
          </div>
        </nav>
      </Container>
      {/* Mobile menu, show/hide based on menu open state */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6
                           bg-offblack sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="home">
              <a>
                <span className="sr-only">UofT Blockchain Group</span>
                <Tilt gyroscope={true}>
                  <div className="flex flex-row space-x-5 items-center justify-center group">
                    <Logo />
                  </div>
                </Tilt>
              </a>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-6 divide-y divide-white">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block py-2 px-3 text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6 flex flex-row space-x-5 items-center">
                {socials.map((item) => (
                  <SocialIcon
                    key={item.name}
                    href={item.href}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
