import Tilt from "react-parallax-tilt";

import Container from "../components/Container";
import PleaseScroll from "./PleaseScroll";

export function Hero() {
  return (
    <Tilt
      scale={1.1}
      perspective={1000}
      transitionSpeed={500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      gyroscope={true}
    >
      <h1 className="text-white text-5xl font-light tracking-wide leading-tight lg:leading-tight lg:text-7xl">
        A student-run organization focused on{" "}
        <span
          className="font-medium text-transparent bg-clip-text bg-gradient-to-r
                         to-[#845ec2] from-[#c493ff] animate-text
                         hover:from-[#f9f871] hover:to-[#ffc75f] hover:via-[#ffc75f]"
        >
          blockchain
        </span>{" "}
        education and networking.
      </h1>
    </Tilt>
  );
}

export default Hero;
