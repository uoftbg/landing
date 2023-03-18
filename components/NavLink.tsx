import Link from "next/link";
import { twMerge } from "tailwind-merge";

import ResponsiveTilt from "./ResponsiveTilt";

/**
 * Props for the NavLink component.
 *
 * @property {string} href - The URL to navigate to.
 * @property {React.ReactNode} children - The content of the link.
 * @property {boolean} tilt - Whether or not to apply a tilt effect (default: true)
 */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  tilt?: boolean;
  [key: string]: any;
}

/**
 * Generic component for a link in the navigation bar.
 */
export default function NavLink({ href, children, ...props }: NavLinkProps) {
  let { className = "", tilt = true, ...otherProps } = props;
  className = twMerge(
    "inline-block py-2 px-3 font-semibold uppercase text-md text-white\
     hover:bg-gradient-to-br hover:text-uoftbg-purple-darkest hover:from-[#f9f871]\
     hover:to-[#ffc75f]",
    className
  );

  const content = (
    <Link href={href} {...otherProps}>
      <a className={className}>{children}</a>
    </Link>
  );

  return (
    // Conditionally apply the tilt effect
    tilt ? <ResponsiveTilt>{content}</ResponsiveTilt> : content
  );
}
