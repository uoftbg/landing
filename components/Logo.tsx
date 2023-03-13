import { twMerge } from "tailwind-merge";

/**
 * Props for the Logo component.
 *
 * All props are passed to the content of the Logo component.
 */
interface LogoProps {
  [key: string]: any;
}

/**
 * Component for the UofT Blockchain Group logo.
 */
export default function Logo({ ...props }: LogoProps) {
  const { className, style, ...otherProps } = props;
  const DEFAULT_CLASSES = `
    h-12 w-12 aspect-square flex items-center justify-center text-3xl
    bg-gradient-to-br from-uoftbg-purple-darkest to-uoftbg-purple-light
    text-white font-mono font-black shadow-inner antialiased md:subpixel-antialiased
    transition duration-300 ease-in-out transform group-hover:scale-125 hover:animate-text
    group-hover:text-uoftbg-purple-darkest group-hover:from-[#f9f871] group-hover:to-[#ffc75f]`;
  const classes = twMerge(DEFAULT_CLASSES, className);

  return (
    <div
      className={classes}
      style={{ userSelect: "none", ...style }}
      {...otherProps}
    >
      <span>B</span>
      <span className="-ml-1.5">G</span>
    </div>
  );
}
