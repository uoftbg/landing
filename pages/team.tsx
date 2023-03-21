import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Page from "../components/Page";
import SecondaryHero from "../components/SecondaryHero";
import SocialIcon from "../components/SocialIcon";
import { getMembersByType, MemberType, memberTypes } from "../utils/members";

const reactScroll = require("react-scroll");

const Team: NextPage = () => {
  // Track the height of the sidebar so that the main content can be offset accordingly
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sidebarRef.current) {
      setSidebarHeight(sidebarRef.current.offsetHeight);
    }
  }, []);

  const [activeType, setActiveType] = useState<MemberType>(memberTypes[0]);
  const setActiveTypeAndScroll = (memberType: MemberType) => {
    setActiveType(memberType);
    const id =
      memberTypes[0] === memberType ? "content" : `section-${memberType.name}`;
    reactScroll.scroller.scrollTo(id, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Page>
      <SecondaryHero
        linkProps={{
          onClick: () => setActiveTypeAndScroll(memberTypes[0]),
        }}
        content={
          <div className="">
            <p className="text-white text-lg sm:text-xl tracking-widest leading-relaxed sm:leading-loose">
              Get to know the people behind the scenes at the University of
              Toronto Blockchain Group.
            </p>
          </div>
        }
      >
        <span>MEET OUR</span>
        <span>TEAM</span>
      </SecondaryHero>

      <div id="content" className="py-32">
        <div className="sticky top-24 w-1/3 hidden sm:block" ref={sidebarRef}>
          <div className="flex flex-col space-y-4 py-2">
            {memberTypes.map((memberType) => (
              <div key={memberType.name}>
                <div className="flex flex-row items-center">
                  <div className="w-8">
                    {activeType && activeType.name === memberType.name && (
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
                  <input
                    type="button"
                    value={memberType.header}
                    className={twMerge(
                      "text-white text-xl font-medium tracking-wide drop-shadow-md cursor-pointer transition-all duration-300 ease-in-out",
                      !activeType || activeType.name !== memberType.name
                        ? "opacity-30 hover:opacity-70"
                        : ""
                    )}
                    onClick={() => setActiveTypeAndScroll(memberType)}
                  />
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
            <div className="flex flex-col">
              {memberTypes.map((memberType, i) => (
                <div
                  key={memberType.name}
                  id={`section-${memberType.name}`}
                  className={i > 0 ? "py-12 sm:py-16 lg:py-24" : ""}
                >
                  <div className="pb-4 mb-12 border-b border-white border-opacity-20">
                    <InView
                      threshold={1}
                      onChange={(inView) => {
                        if (inView) {
                          setActiveType(memberType);
                        }
                      }}
                      as="h1"
                      className="text-white tracking-wide sm:leading-tight uppercase drop-shadow-md text-3xl font-medium sm:font-light sm:text-5xl md:text-7xl"
                    >
                      {memberType.header}
                    </InView>
                  </div>
                  <div className="flex flex-col space-y-4 py-2">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {getMembersByType(memberType).map((member) => (
                        <div className="group" key={member.name}>
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                            <div className="relative h-full w-full bg-gray-900">
                              <Image
                                src={member.image}
                                alt={member.name}
                                className="object-cover object-center grayscale transform transition-all duration-500 ease-in-out
                                           group-hover:scale-[1.04] group-hover:grayscale-0"
                                layout="fill"
                              />
                              <div
                                className="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4
                                           transition-all duration-300 ease-in-out opacity-0 translate-y-4
                                           group-hover:opacity-100 group-hover:translate-y-0"
                              >
                                <div
                                  aria-hidden="true"
                                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-uoftbg-purple-darkest opacity-100"
                                ></div>
                                <div className="flex flex-col space-y-2">
                                  <div className="relative flex flex-row items-center space-x-2">
                                    <SocialIcon
                                      href={member.linkedin}
                                      icon={faLinkedin}
                                      className="hover:bg-none hover:text-white hover:rotate-0"
                                      tilt={false}
                                    />
                                    {/* <SocialIcon
                                      href={member.linkedin}
                                      icon={faInstagram}
                                      className="hover:bg-none hover:text-white hover:rotate-0"
                                      tilt={false}
                                    /> */}
                                    {member.email != null ? (
                                      <SocialIcon
                                        href={`mailto:${member.email}`}
                                        icon={faEnvelope}
                                        className="hover:bg-none hover:text-white hover:rotate-0"
                                        tilt={false}
                                      />
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1 mt-4">
                            <h1 className="font-medium text-white tracking-wide shadow-md text-lg sm:text-2xl">
                              {member.name}
                            </h1>
                            <p className="text-white text-xs tracking-wide shadow-md">
                              {member.position}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Team;
