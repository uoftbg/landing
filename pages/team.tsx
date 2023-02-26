import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import FullPageSection from "../components/FullPageSection";
import Container from "../components/Container";
import { useState, useEffect, useRef } from "react";
import { memberTypes } from "../utils/members";
import { getMembersByGroup } from "../utils/members";

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
    <React.Fragment>
      <Head>
        <title>UofT Blockchain Group</title>
        <meta
          name="description"
          content="Connecting students to the blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-x-clip bg-uoftbg-purple-darkest">
        {/* Section 1 - Hero */}
        <FullPageSection id="hero" header={true}>
          <Container className="sm:pt-24 pt-16">
            <h1 className="tracking-wide text-white text-5xl sm:text-[9rem] sm:leading-tight font-light">
              <div className="flex flex-col">
                <span>MEET OUR</span>
                <span>TEAM</span>
              </div>
            </h1>
          </Container>
        </FullPageSection>

        {/* Section 2 - Team */}
        <Container id="team" className="relative pt-14 pb-16 ">
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

                  {getMembersByGroup(memberType).map((group, index) => (
                    <div key={index}>
                      <p>group {index}</p>
                      {group.map((member) => (
                        <div key={member.name}>
                          <p>{member.name}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Team;
