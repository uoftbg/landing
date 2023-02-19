import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import FullPageSection from "../components/FullPageSection";
import Container from "../components/Container";
import { useState, useEffect, useRef } from "react";
import { memberTypes } from "../utils/members";
import { getMembersByGroup } from "../utils/members";

const Team: NextPage = () => {
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setSidebarHeight(ref.current.offsetHeight);
    }
  }, []);

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
          <Container className="pt-14 pb-16">
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
          <div className="sticky top-0 w-1/3" ref={ref}>
            {memberTypes.map((memberType) => (
              <div key={memberType.name}>
                <p>{memberType.header}</p>
              </div>
            ))}
          </div>
          <div
            className="flex flex-row w-full"
            style={{ marginTop: `-${sidebarHeight}px` }}
          >
            {/* Empty div in place of sidebar */}
            <div className="w-1/3 flex-shrink-0"></div>
            {/* Content div */}
            <div className="w-full">
              {memberTypes.map((memberType) => (
                <div key={memberType.name} className="min-h-screen">
                  <h1 className="tracking-wide text-white text-8xl sm:leading-tight font-light uppercase">
                    {memberType.header}
                  </h1>

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
