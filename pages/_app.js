import { ThemeProvider, Global } from "@emotion/react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { useRef } from "react";
import { useRouter } from "next/router";

import theme from "theme";
import "styles/globals.css";

import globalStyles from "styles/global";

export default function App({ Component, pageProps }) {
  const { route } = useRouter();
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        reloadOnContextChange: true,
      }}
      watch={[route]}
      containerRef={containerRef}
      onUpdate={({ scroll }) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      // onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    >
      <main data-scroll-container ref={containerRef}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </LocomotiveScrollProvider>
  );
}
