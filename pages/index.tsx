import type { NextPage } from "next";
import React from "react";

import Hero from "../components/Hero";
import Page from "../components/Page";
import PleaseScroll from "../components/PleaseScroll";

const Home: NextPage = () => {
  return (
    <Page>
      <div className="py-32 sm:py-48 lg:py-56">
        <Hero />
        <div className="mt-10">
          <PleaseScroll />
        </div>
      </div>
    </Page>
  );
};

export default Home;
