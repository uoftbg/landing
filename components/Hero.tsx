import Container from "../components/Container";
import Tilt from "react-parallax-tilt";
import MouseScrollIcon from "./MouseScrollIcon";

export function Hero() {
  return (
    <main>
      <Container className="pt-20 pb-16 lg:pt-32">
        <Tilt>
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
          <div className="flex flex-row space-x-4 items-center">
            <MouseScrollIcon />
            <p className="text-transparent text-sm font-light tracking-wide bg-gradient-to-r bg-clip-text from-gray-400 to-gray-400 via-gray-50 animate-text">
              Please scroll
            </p>
          </div>
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
