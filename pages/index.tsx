import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ThemeSwitcher from "../components/theme_switcher";

import Parallax from "parallax-js";
import Tilt from "react-vanilla-tilt";

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
      console.log(scene);
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
      </Head>

      <div className="z-0 top-0 left-0 fixed w-full h-[100vh] overflow-hidden bg-offwhite dark:bg-black">
        <div
          id="scene"
          data-pointer-events="true"
          className="pointer-events-none"
          style={{ height: "inherit" }}
        >
          {/* Loop through each layer and create the specified number of stars */}
          {STAR_LAYERS.map((layer) => (
            <div
              key={layer.id}
              id={`stars-${layer.id}`}
              data-depth={layer.depth}
            >
              {[...Array(layer.count)].map((_, i) => {
                // Randomly generate a number between 1-5 for the size
                const size = `${gen.intBetween(1, 3)}px`;
                // Randomly generate two numbers between 1-110 for the x and y coordinates
                const x = `${gen.intBetween(1, 110) - 5}vw`;
                const y = `${gen.intBetween(1, 110) - 5}vh`;

                return (
                  <div
                    key={i}
                    // make stars glow and animate pulse with random duration
                    className="absolute inline-block rounded-full bg-black dark:bg-white animate-pulse"
                    style={{
                      width: size,
                      height: size,
                      left: x,
                      top: y,
                      animationDuration: `${gen.intBetween(3000, 10000)}ms`,
                    }}
                  />
                );
              })}
            </div>
          ))}

          {/* Text layers */}
          <h1 id="text-1" data-depth="1.0">
            <span
              className="absolute inline-block"
              style={{ top: "20vh", left: "30vw" }}
            >
              Connecting Students
            </span>
          </h1>
          <h1 id="text-2" data-depth="0.9">
            <span
              className="absolute inline-block"
              style={{ top: "40vh", left: "40vw" }}
            >
              {" "}
              to the Blockchain
            </span>
          </h1>
        </div>
      </div>

      <ThemeSwitcher />
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  const seed = Math.floor(Math.random() * 1000000);
  return { props: { seed } };
}

export default Home;
