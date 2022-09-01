import { ThemeProvider, Global } from "@emotion/react";
import theme from "theme";
import "styles/globals.css";

import globalStyles from "styles/global";

import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
          <Component {...pageProps} />
    </ThemeProvider>
  );
}
