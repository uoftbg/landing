import type { NextPage } from "next";
import Button from "../components/Button";
import Page from "../components/Page";
import SecondaryHero from "../components/SecondaryHero";

const reactScroll = require("react-scroll");

const Input = ({ ...props }) => {
  let { wrapperProps = {}, ...otherProps } = props;
  return (
    <div>
      <div className="relative">
        <input
          {...otherProps}
          className="peer block w-full border-0 bg-transparent py-1.5 text-white focus:ring-0 sm:text-base lg:text-xl sm:leading-6
                             tracking-wide font-medium
                             focus:outline-none placeholder:text-white placeholder:text-opacity-50"
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 border-opacity-50 peer-focus:border-t-2 peer-focus:border-white"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

const Contact: NextPage = () => (
  <Page>
    <SecondaryHero
      linkProps={{
        onClick: () =>
          reactScroll.scroller.scrollTo("content", {
            duration: 800,
            smooth: "easeInOutQuart",
          }),
      }}
      content={
        <div className="">
          <p className="text-white text-lg sm:text-xl tracking-widest leading-relaxed sm:leading-loose">
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>
        </div>
      }
    >
      <span>CONNECT</span>
      <span>WITH US</span>
    </SecondaryHero>

    <div id="content" className="py-32 min-h-screen">
      <form
        action="#"
        method="POST"
        className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8"
      >
        <div className="max-w-xl lg:mr-0 lg:max-w-2xl xl:max-w-3xl mx-auto">
          <div className="flex flex-col justify-between h-full space-y-8">
            <Input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="First name"
              required
            />
            <Input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              placeholder="Last name"
              required
            />
            <Input
              wrapperProps={{ className: "sm:col-span-2" }}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email address"
              required
            />
            <Input
              wrapperProps={{ className: "sm:col-span-2" }}
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              placeholder="Phone number"
            />
            <div className="sm:col-span-2">
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="peer block w-full border-0 bg-transparent py-2 px-0 text-white focus:ring-0 sm:text-base lg:text-xl sm:leading-6
                             tracking-wide font-medium
                             focus:outline-none placeholder:text-white placeholder:text-opacity-50"
                ></textarea>
                <div
                  className="absolute inset-x-0 bottom-0 border-t border-gray-300 border-opacity-50 peer-focus:border-t-2 peer-focus:border-white"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            {/* <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button> */}
            <Button
              type="submit"
              arrow={true}
              tilt={true}
              textOnly={true}
              className="opacity-50 hover:opacity-100 text-base sm:text-lg"
            >
              <span>Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  </Page>
);

export default Contact;
