import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

import Page from "../components/Page";
import ResponsiveTilt from "../components/ResponsiveTilt";
import { getMembersByType, memberTypes } from "../utils/members";

const reactScroll = require("react-scroll");

const Team: NextPage = () => {
  // Track the height of the sidebar so that the main content can be offset accordingly
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setSidebarHeight(ref.current.offsetHeight);
    }
  }, []);

  const [activeType, setActiveType] = useState(memberTypes[0]);

  return (
    <Page>
      <div id="hero" className="py-32 sm:py-48 lg:py-56">
        <h1 className="text-white text-5xl font-light tracking-wide leading-tight lg:leading-tight lg:text-9xl">
          <div className="flex flex-col">
            <span>MEET OUR</span>
            <span>TEAM</span>
          </div>
        </h1>
        <div className="mt-10 sm:mt-16 lg:mt-20">
          <div className="flex">
            <ResponsiveTilt>
              <reactScroll.Link
                className="w-36 h-36 rounded-full flex items-center justify-center border border-white border-opacity-50
                              hover:border-opacity-100 transition-all duration-300 cursor-pointer
                              hover:shadow-lg hover:scale-105 transform group opacity-80 hover:opacity-90 hover:border-uoftbg-purple-darkest
                              hover:animate-text hover:bg-gradient-to-br hover:from-[#f9f871] hover:to-[#845ec2] hover:via-[#c493ff]"
                to="content"
                smooth={true}
                spy={true}
                duration={800}
                onClick={() => setActiveType(memberTypes[0])}
              >
                <ArrowLongDownIcon
                  className="h-12 w-12 stroke-[0.5px] subpixel-antialiased animate-bounce-slow group-hover:text-uoftbg-purple-darkest
                             transition-all duration-300 ease-in-out bg-none group-hover:h-14 group-hover:w-14 group-hover:stroke-1"
                />
              </reactScroll.Link>
            </ResponsiveTilt>
          </div>
        </div>
      </div>

      <div id="content" className="py-32">
        <div className="sticky top-24 w-1/3 hidden sm:block" ref={ref}>
          <div className="flex flex-col space-y-4 py-2">
            {memberTypes.map((memberType) => (
              <div key={memberType.name}>
                <div className="flex flex-row items-center">
                  <div className="w-8">
                    {/* Add bullet point if active */}
                    {activeType.name === memberType.name && (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                  <span
                    className="text-white text-xl font-medium tracking-wide drop-shadow-md cursor-pointer"
                    onClick={() => setActiveType(memberType)}
                  >
                    {memberType.header}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-row w-full"
          style={{ marginTop: `-${sidebarHeight}px` }}
        >
          {/* Empty div in place of sidebar */}
          <div className="w-1/3 flex-shrink-0 hidden sm:block"></div>
          {/* Content div */}
          <div className="w-full">
            {memberTypes.map((memberType) => (
              <div key={memberType.name} className="min-h-screen">
                <div className="pb-4 mb-12 border-b border-white border-opacity-20">
                  <h1 className="text-white tracking-wide text-7xl sm:leading-tight font-light uppercase drop-shadow-md">
                    {memberType.header}
                  </h1>
                </div>
                <div className="flex flex-col space-y-4 py-2">
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {getMembersByType(memberType).map((member) => (
                      <a href="#" className="group" key={member.name}>
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                          <div className="relative h-full w-full object-cover object-center group-hover:opacity-75">
                            <Image
                              src={member.image}
                              alt={member.name}
                              layout="fill"
                            />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                          <h3>Focus Paper Refill</h3>
                          <p>$13</p>
                        </div>
                        <p className="mt-1 text-sm italic text-gray-500">
                          3 sizes available
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Team;
