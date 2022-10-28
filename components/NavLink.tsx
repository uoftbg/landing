import Link from "next/link";
import Tilt from "react-parallax-tilt";

/**
 * Props for the NavLink component.
 *
 * @property {string} href - The URL to navigate to.
 * @property {React.ReactNode} children - The content of the link.
 */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * Generic component for a link in the navigation bar.
 */
export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Tilt>
      <Link href={href}>
        <a
          className="inline-block py-2 px-3 font-medium small-caps text-md text-white bg-gradient-to-br
                     hover:text-uoftbg-purple-darkest hover:from-[#f9f871] hover:to-[#ffc75f]"
        >
          {children}
        </a>
      </Link>
    </Tilt>
  );
}
