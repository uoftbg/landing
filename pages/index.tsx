import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";

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
      <div className="w-screen h-screen bg-uoftbg-purple-darkest">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </React.Fragment>
  );
};

export default Home;
