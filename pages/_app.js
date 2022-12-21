import { ThemeProvider, Global } from "@emotion/react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { useRef } from "react";
import { useRouter } from "next/router";

import { RecoilRoot } from "recoil";
import theme from "theme";
import "styles/globals.css";

import globalStyles from "styles/global";
export default function App({ Component, pageProps }) {
  console.log("what are you looking for ? ( ͡◉ ͜ʖ ͡◉)");
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
