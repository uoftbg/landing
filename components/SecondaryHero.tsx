import { twMerge } from "tailwind-merge";

import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

import ResponsiveTilt from "../components/ResponsiveTilt";

interface SecondaryHeroProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  linkProps?: any;
}

export default function SecondaryHero({
  children,
  content = null,
  linkProps = {},
}: SecondaryHeroProps) {
  return (
    <div id="hero" className="py-32 sm:py-32 lg:py-56 min-h-screen">
      <h1 className="text-white text-7xl font-light tracking-wide leading-tight lg:leading-tight lg:text-9xl">
        <div className="flex flex-col">{children}</div>
      </h1>
      <div className="mt-10 sm:mt-16 lg:mt-20 w-full">
        <div className="flex flex-col gap-x-0 gap-y-10 sm:flex-row sm:justify-between sm:items-center sm:gap-y-0 sm:gap-x-10">
          <div className="flex w-full grow-1">
            <ResponsiveTilt>
              <div
                className={twMerge(
                  "w-36 h-36 rounded-full flex items-center justify-center border border-white border-opacity-50\
                     hover:border-opacity-100 transition-all duration-300 cursor-pointer\
                     hover:shadow-lg hover:scale-105 transform group opacity-80 hover:opacity-90 hover:border-uoftbg-purple-darkest\
                     hover:animate-text hover:bg-gradient-to-br hover:from-[#f9f871] hover:to-[#845ec2] hover:via-[#c493ff]",
                  linkProps.className || ""
                )}
                {...linkProps}
              >
                <ArrowLongDownIcon
                  className="h-12 w-12 text-white stroke-[0.5px] subpixel-antialiased animate-bounce-slow group-hover:text-uoftbg-purple-darkest
                               transition-all duration-300 ease-in-out bg-none group-hover:h-14 group-hover:w-14 group-hover:stroke-1"
                />
              </div>
            </ResponsiveTilt>
          </div>

          {content && <div>{content}</div>}
        </div>
      </div>
    </div>
  );
}
