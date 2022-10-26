import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ThemeSwitcher from "../components/theme_switcher";

const SHAPES: any = [
  { background: "#b0bec5", zIndex: 2 },
  { background: "#f5f5f5", zIndex: 2 },
  { background: "#9b5de5", zIndex: 1 },
  { background: "#f15bb5", zIndex: 2 },
  { background: "#fee440", zIndex: 2 },
  { background: "#00bbf9", zIndex: 2 },
  { background: "#00f5d4", zIndex: 2 },
];

const CONFIGURATIONS: any = [
  {
    positions: [
      { left: "0%", top: "0%", height: "50%", width: "20%" },
      { left: "20%", top: "0%", height: "50%", width: "30%" },
      { left: "50%", top: "0%", height: "100%", width: "50%" },
      { left: "0%", top: "50%", height: "50%", width: "30%" },
      { left: "30%", top: "50%", height: "50%", width: "20%" },
      { left: "70%", top: "50%", height: "50%", width: "30%" },
      { left: "85%", top: "75%", height: "25%", width: "15%" },
    ],
  },
  {
    positions: [
      { left: "25%", top: "20%", height: "80%", width: "15%" },
      { left: "40%", top: "20%", height: "50%", width: "10%" },
      { left: "50%", top: "0%", height: "100%", width: "25%" },
      { left: "0%", top: "0%", height: "50%", width: "10%" },
      { left: "10%", top: "0%", height: "70%", width: "15%" },
      { left: "75%", top: "10%", height: "80%", width: "15%" },
      { left: "90%", top: "40%", height: "60%", width: "10%" },
    ],
  },
  {
    positions: [
      { left: "0%", top: "16.5%", height: "32%", width: "20%" },
      { left: "20%", top: "2.7%", height: "55%", width: "34%" },
      { left: "38%", top: "0%", height: "100%", width: "62%" },
      { left: "0%", top: "47.3%", height: "55%", width: "34%" },
      { left: "34%", top: "56.4%", height: "32%", width: "20%" },
      { left: "65%", top: "45%", height: "55%", width: "34%" },
      { left: "80%", top: "68%", height: "32%", width: "20%" },
    ],
  },
];

const ROUNDNESS: any = [
  { borderRadius: "6rem" },
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
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Get a random combination
      const combination =
        COMBINATIONS[randomInteger(0, COMBINATIONS.length - 1)];

      // Set the configuration and roundness
      setConfigurationIndex(combination.configuration);
      setRoundnessIndex(combination.roundness);
    }, 3000);

    return () => clearInterval(interval);
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

      <ThemeSwitcher />

      <div className="min-w-screen min-h-screen overflow-hidden bg-black grid place-items-center m-0">
        <main className="relative aspect-golden" style={{ width: "90vmin" }}>
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
