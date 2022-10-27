import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ThemeSwitcher from "../components/theme_switcher";

import Parallax from "parallax-js";
import Tilt from "react-parallax-tilt";

const STAR_LAYERS = [
  {
    id: "small",
    count: 100,
    depth: 0.5,
  },
  {
    id: "medium",
    count: 50,
    depth: 0.6,
  },
  {
    id: "large",
    count: 25,
    depth: 0.7,
  },
];

interface HomeProps {
  seed: number;
}

const Home: NextPage<HomeProps> = ({ seed }) => {
  // Enable parallax effect on component mount
  React.useEffect(() => {
    const scene = document.getElementById("scene");
    if (scene) {
      const parallaxInstance = new Parallax(scene);
      return () => parallaxInstance.disable();
    } else {
      console.log("scene not found");
      return;
    }
  }, []);

  let gen = require("random-seed").create(seed);

  return (
    <React.Fragment>
      <Head>
        <title>UofT Blockchain Group</title>
        <meta
          name="description"
          content="Connecting students to the blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/nmg6fvu.css"
        ></link>
      </Head>

      <div className="w-screen h-screen bg-uoftbg-purple-darkest">
        {/* <div className="relative h-32 w-32 bg-white text-black font-black font-sans overflow-hidden">
          <span className="absolute top-0 left-0 text-8xl tracking-tighter">
            UT
          </span>
          <span className="absolute top-1/2 left-0 text-8xl tracking-tighter">
            BG
          </span>
        </div> */}

        <div className="p-8 flex flex-col items-center">
          <Tilt>
            <div className="flex flex-row items-baseline space-x-8">
              <span className="shrink-0 text-7xl uppercase tracking-tight text-white">
                CONNECTING STUDENTS
              </span>
              {/* <div className="w-full h-1 bg-white"></div> */}
            </div>
            <span className="inline-flex items-end space-x-8">
              <div className="flex flex-col">
                <span className="w-full h-full text-4xl uppercase tracking-tight text-white">
                  TO THE
                </span>
                {/* make a div the same width as the text above it */}
                <div className="w-full bg-white aspect-golden" />
              </div>
              <span className="uppercase tracking-tight text-white text-[12rem] leading-3">
                BLOCKCHAIN.
              </span>
            </span>
          </Tilt>
        </div>
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  const seed = Math.floor(Math.random() * 1000000);
  return { props: { seed } };
}

export default Home;
