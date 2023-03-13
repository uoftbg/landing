import Container from "../components/Container";
import Tilt from "react-parallax-tilt";
import PleaseScroll from "./PleaseScroll";

export function Hero() {
  return (
    <main>
      <Container className="pt-20 pb-16 lg:pt-32">
        <Tilt
          scale={1.1}
          perspective={1000}
          transitionSpeed={500}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          gyroscope={true}
        >
          <h1 className="tracking-wide text-white text-5xl sm:text-7xl sm:leading-tight font-light">
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
        <div className="mt-36 lg:mt-44">
          <PleaseScroll />
          {/* <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: "Transistor", logo: logoTransistor },
                { name: "Tuple", logo: logoTuple },
                { name: "StaticKit", logo: logoStaticKit },
              ],
              [
                { name: "Mirage", logo: logoMirage },
                { name: "Laravel", logo: logoLaravel },
                { name: "Statamic", logo: logoStatamic },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image src={company.logo} alt={company.name} unoptimized />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul> */}
        </div>
      </Container>
    </main>
  );
}

export default Hero;
