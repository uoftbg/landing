import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ThemeSwitcher from "../components/theme_switcher";

/**
 * A shape.
 */
class Shape {
  background: string;
  zIndex: number;
  style: object = {};

  /**
   * The constructor for the Shape class.
   * @param background The background color of the shape. Should be a valid CSS color.
   * @param zIndex The z-index of the shape.
   * @param style Extra styles to apply to the shape (optional). Use this to specify position, size, etc.
   */
  constructor(background: string, zIndex: number, style?: object = {}) {
    this.background = background;
    this.zIndex = zIndex;
    this.style = style;
  }
}

/**
 * Build a grid of shapes for the given animation phase.
 * @param wrapperSize The size of the wrapper div containing the shapes, in pixels.
 * @returns An array of Shape objects.
 */
const buildShapes = (
  wrapperSize: { width: number; height: number },
  phase: number
): Shape[] => {
  let shapes: Shape[] = [
    new Shape("#FFFFFF", 2), // white
    new Shape("#8A7F1C", 2), // green
    new Shape("#FFD2BF", 1), // beige
    new Shape("#FFB400", 2), // yellow
    new Shape("#FE5100", 2), // orange
    new Shape("#F47F9B", 2), // pink
    new Shape("#A9A9BE", 2), // blue
  ];

  const size = wrapperSize.width / 4;
  switch (phase) {
    case 0:
      shapes[0].style = {
        left: "0%",
        top: "50%",
        height: "50%",
        width: `${size}px`,
      };
      shapes[1].style = {
        left: "25%",
        top: "50%",
        height: "50%",
        width: "25%",
      };
      shapes[2].style = {
        left: "50%",
        top: "50%",
        height: "50%",
        width: "50%",
      };
      shapes[3].style = {
        left: "50%",
        top: "50%",
        height: "25%",
        width: "50%",
      };
      shapes[4].style = {
        left: "50%",
        top: "75%",
        height: "25%",
        width: "50%",
      };
      shapes[5].style = {
        left: "50%",
        top: "10%",
        height: "40%",
        width: "25%",
      };
      shapes[6].style = {
        left: "75%",
        top: "10%",
        height: "40%",
        width: "25%",
      };
  }

  return shapes;
};

const ROUNDNESS: any = [
  [
    { borderBottomLeftRadius: "10rem" },
    { borderRadius: "20rem" },
    { borderTopRightRadius: "12rem" },
    { borderTopRightRadius: "10rem", borderBottomRightRadius: "10rem" },
    { borderBottomLeftRadius: "10rem" },
    { borderRadius: "16rem" },
    { borderTopLeftRadius: "10rem" },
  ],
  { borderRadius: "0rem" },
  { borderRadius: "30rem" },
  [
    { borderBottomLeftRadius: "10rem" },
    { borderRadius: "20rem" },
    { borderTopRightRadius: "12rem" },
    { borderTopRightRadius: "10rem", borderBottomRightRadius: "10rem" },
    { borderBottomLeftRadius: "10rem" },
    { borderTopLeftRadius: "16rem" },
    { borderTopLeftRadius: "10rem" },
  ],
];

const COMBINATIONS = [
  { configuration: 0, roundness: 0 },
  { configuration: 0, roundness: 1 },
  { configuration: 0, roundness: 3 },
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 2, roundness: 2 },
];

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Home: NextPage = () => {
  const [configurationIndex, setConfigurationIndex] = React.useState(0);
  const [roundnessIndex, setRoundnessIndex] = React.useState(0);

  // Randomly select a configuration and roundness
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Get a random combination
  //     const combination =
  //       COMBINATIONS[randomInteger(0, COMBINATIONS.length - 1)];

  //     // Set the configuration and roundness
  //     setConfigurationIndex(combination.configuration);
  //     setRoundnessIndex(combination.roundness);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  // Update the size of the shapes based on size of the wrapper div
  const [_, setWrapperSize] = React.useState({ width: 0, height: 0 });
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleResize = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        setWrapperSize({
          width: wrapper.offsetWidth,
          height: wrapper.offsetHeight,
        });
        console.log(wrapper.offsetWidth, wrapper.offsetHeight);
      } else {
        console.error("Wrapper ref is null");
        setWrapperSize({ width: 0, height: 0 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wrapperRef]);

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

      <ThemeSwitcher />

      <div className="min-w-screen min-h-screen overflow-hidden bg-black grid place-items-center m-0">
        <main
          className="relative aspect-golden"
          style={{ width: "90vmin" }}
          ref={wrapperRef}
        >
          {SHAPES.map((shape: any, index: number) => {
            // If ROUNDNESS[roudnessIndex] is an array, then it should be of length SHAPES.length.
            // In which case, we use the index of the shape to determine the roundness.
            const roundness = Array.isArray(ROUNDNESS[roundnessIndex])
              ? ROUNDNESS[roundnessIndex][index]
              : ROUNDNESS[roundnessIndex];

            const styles = {
              ...shape,
              ...CONFIGURATIONS[configurationIndex].positions[index],
              ...roundness,
            };
            return (
              <div
                key={index}
                style={styles}
                className="absolute transition-all duration-[750ms] ease-in-out"
              ></div>
            );
          })}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Home;
