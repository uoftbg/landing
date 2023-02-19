import Container from "../components/Container";

export function About() {
  return (
    <Container className="pt-8 pb-16">
      <h1 className="tracking-wide text-white text-5xl sm:text-[9rem] sm:leading-tight font-light">
        <div className="flex flex-col">
          <span>WHAT IS</span>
          <span>UTBG</span>
        </div>
      </h1>
      <div className="w-full flex flex-row justify-end">
        <div className="w-1/3 flex flex-col justify-center space-y-5">
          <h3 className="text-white text-5xl font-light leading-tight small-caps">
            A COMMUNITY
          </h3>
          <p className="text-white text-md leading-loose font-light">
            of students, alumni, and industry professionals who are passionate
            about the future of blockchain, cryptocurrency, and decentralized
            finance. The first student-run organization of its kind at the
            University of Toronto.{" "}
            <span className="italic">
              Together we work to educate and empower students to become leaders
              in the blockchain space.
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
