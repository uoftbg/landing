import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  arrow?: boolean;
  tilt?: boolean;
  textOnly?: boolean;
  [key: string]: any;
}

export default function Button({
  children,
  arrow = false,
  tilt = true,
  textOnly = false,
  ...props
}: ButtonProps) {
  const { className = "", ...otherProps } = props;
  const arrowBg = textOnly
    ? "bg-white group-hover:bg-gradient-to-br"
    : "bg-white";
  return (
    <button
      {...otherProps}
      className={twMerge(
        "group block\
         hover:animate-text hover:bg-gradient-to-br hover:from-[#f9f871] hover:to-[#845ec2] hover:via-[#c493ff]\
         transform transition-all duration-300 cursor-pointer\
         text-base text-white hover:text-uoftbg-purple-darkest\
         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900\
         flex flex-row items-center justify-center h-12 shadow",
        textOnly
          ? "w-auto border-none hover:border-none hover:text-transparent hover:bg-clip-text opacity-100 hover:opacity-100 font-semibold tracking-wide"
          : "w-40 px-5 py-3 border border-white border-opacity-50 hover:border-uoftbg-purple-darkest hover:border-opacity-100 opacity-80 hover:opacity-90 font-medium",
        className
      )}
    >
      {children}
      {arrow && (
        <div className="inline-flex flex-col relative justify-center w-2.5 h-2.5 ml-2 group-hover:translate-x-2 transition">
          <span
            className={`group-hover:scale-x-150 transition absolute origin-right w-full scale-x-0 insex-y-0 m-auto right-[1px] h-[2px] ${arrowBg}`}
          ></span>
          <span
            className={`origin-right w-full relative top-[1.25px] h-[2px] rotate-45 ${arrowBg}`}
          ></span>
          <span
            className={`origin-right w-full relative bottom-[1.25px] h-[2px] -rotate-45 ${arrowBg}`}
          ></span>
        </div>
      )}
    </button>
  );
}
