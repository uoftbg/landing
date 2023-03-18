import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ThemeProvider } from "next-themes";

import { config } from "@fortawesome/fontawesome-svg-core";

import type { AppProps } from "next/app";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
