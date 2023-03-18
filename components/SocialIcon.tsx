import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ResponsiveTilt from "./ResponsiveTilt";

interface SocialIconProps {
  href: string;
  icon: any;
  [key: string]: any;
}

export default function SocialIcon({ href, icon, ...props }: SocialIconProps) {
  let { className = "", ...otherProps } = props;
  className = twMerge(
    "inline-block p-1 font-medium text-md text-white hover:bg-gradient-to-br\
     hover:text-uoftbg-purple-darkest hover:from-[#f9f871] hover:to-[#ffc75f]\
     transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-6",
    className
  );

  return (
    <ResponsiveTilt>
      <Link href={href}>
        <a
          target="_blank"
          rel="noreferrer"
          {...otherProps}
          className={className}
        >
          <FontAwesomeIcon icon={icon} size="lg" />
        </a>
      </Link>
    </ResponsiveTilt>
  );
}
