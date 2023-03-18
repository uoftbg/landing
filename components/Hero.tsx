import ResponsiveTilt from "./ResponsiveTilt";

export function Hero() {
  return (
    <ResponsiveTilt
      scale={1.1}
      perspective={1000}
      transitionSpeed={500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      gyroscope={true}
    >
      <h1 className="text-white font-light tracking-wide text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-tight">
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
    </ResponsiveTilt>
  );
}

export default Hero;
