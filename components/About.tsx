import Container from "../components/Container";
import Logo from "../components/Logo";

import Tilt from "react-parallax-tilt";
import { useRef } from "react";

/**
 * Returns a random floating point number sampled uniformly from the range [min, max).
 * @param min The minimum value (inclusive)
 * @param max The maximum value (exclusive)
 */
const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref}>
      <Tilt
        scale={1.1}
        perspective={1000}
        transitionSpeed={2000}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        gyroscope={true}
        className="group"
      >
        <Container className="pt-8 pb-16">
          <h1 className="tracking-wide text-5xl sm:text-[9rem] sm:leading-tight">
            <span
              className="font-semibold px-3 text-transparent bg-clip-text animate-text bg-offwhite
                         group-hover:bg-gradient-to-r group-hover:to-[#ffc75f] group-hover:from-[#c493ff]
                         group-hover:via-[#ffc75f]"
            >
              Let us introduce ourselves.
            </span>
          </h1>

          <div className="w-full block sm:flex flex-row justify-start sm:justify-end mt-16 px-0 sm:px-4 space-y-10 sm:space-y-0 space-x-0 sm:space-x-20">
            <div className="grow-0 w-full sm:w-2/3">
              <Logo
                className="text-9xl font-serif italic w-full h-full group-hover:scale-105 bg-none group-hover:bg-gradient-to-r
                           rounded-xl border-2 border-white group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:to-[#ffc75f] group-hover:from-[#c493ff]
                           group-hover:via-[#ffc75f]"
              />
            </div>

            <div className="shrink-0 w-full sm:w-1/3 flex flex-col justify-center space-y-5">
              <h3 className="text-white text-5xl font-light leading-tight small-caps">
                WE ARE A COMMUNITY
              </h3>
              <p className="text-white text-md leading-loose font-light">
                of students, alumni, and industry professionals who are
                passionate about the future of blockchain, cryptocurrency, and
                decentralized finance. The first student-run organization of its
                kind at the University of Toronto.{" "}
                <span className="italic">
                  Together we work to educate and empower students to become
                  leaders in the blockchain space.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </Tilt>
    </div>
  );
}

export default About;
