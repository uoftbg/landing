import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import FullPageSection from "../components/FullPageSection";

const Home: NextPage = () => {
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

      <div className="overflow-x-hidden">
        {/* Section 1 - Hero */}
        <FullPageSection id="hero" header={true}>
          <Hero />
        </FullPageSection>
        {/* Section 2 - About (Who are we?) */}
        <FullPageSection id="about">
          <About />
        </FullPageSection>
        {/* Section 3 - Our Mission (What do we do?) */}
        <FullPageSection id="mission">
          <Mission />
        </FullPageSection>
      </div>
    </React.Fragment>
  );
};

export default Home;
