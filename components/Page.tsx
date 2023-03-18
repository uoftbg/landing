import Head from "next/head";
import React from "react";

import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PleaseScroll from "../components/PleaseScroll";

/**
 * Props for the Page component.
 *
 * @property {React.ReactNode} children - The content of the section
 * @property {string} title - An additional title that is appended to the default title
 */
interface PageProps {
  children: React.ReactNode;
  title?: string;
}

function Page({ children, title }: PageProps) {
  return (
    <React.Fragment>
      <Head>
        <title>UofT Blockchain Group{title ? ` | ${title}` : ""}</title>
        <meta
          name="description"
          content="Connecting students to the blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-uoftbg-purple-darkest min-h-screen">
        <Header />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Blob background */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#322052" />
                  <stop offset={1} stopColor="#060312" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Content */}
          <Container>
            <div className="relative z-10">{children}</div>
          </Container>
          {/* Blob background */}
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6440A4" />
                  <stop offset={1} stopColor="#060312" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Page.defaultProps = {
  title: "",
};

export default Page;
