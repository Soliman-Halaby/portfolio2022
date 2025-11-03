import { ThemeProvider, Global } from "@emotion/react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { RecoilRoot } from "recoil";
import theme from "theme";
import "styles/globals.css";

import globalStyles from "styles/global";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("what are you looking for ? ( ͡◉ ͜ʖ ͡◉)");
  }, []);
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </RecoilRoot>
  );
}
