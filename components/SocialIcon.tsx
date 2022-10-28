import clsx from "clsx";
import Link from "next/link";

import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialIconProps {
  href: string;
  icon: any;
  [key: string]: any;
}

export default function SocialIcon({ href, icon, ...props }: SocialIconProps) {
  let { className = "" } = props;
  className = clsx(
    "inline-block p-1 font-medium small-caps text-md text-white bg-gradient-to-br\
     hover:text-uoftbg-purple-darkest hover:from-[#f9f871] hover:to-[#ffc75f]\
     transition-transform duration-300 ease-in-out transform hover:scale-125",
    props.className
  );

  return (
    <Tilt>
      <Link href={href}>
        <a target="_blank" rel="noreferrer" {...props} className={className}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </a>
      </Link>
    </Tilt>
  );
}
