import { App, Container } from "./style";

import { RecoilRoot, useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";
import { useRef } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";
import Cursor from "@/components/Cursor";

import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import useIsMobile from "hook";

export default function Layout({
  children,
  reducedFooter = false,
  noFooter = false,
  scroll = true,
  cursorWidth = 16,
  cursorHeight = 18,
  display = "normal",
}) {
  const { route } = useRouter();
  const containerRef = useRef(null);

  const loaderDisplay = useRecoilValue(loaderState);

  console.log("je display", loaderDisplay);
  const isMobile = useIsMobile();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: true },
        reloadOnContextChange: true,
      }}
      watch={[route]}
      containerRef={containerRef}
      onUpdate={({ scroll }) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      <Loader />
      <main data-scroll-container ref={containerRef}>
        <Header />
        <Container ref={containerRef}>
          <App>
            {/* <CustomCursor width={cursorWidth} height={cursorHeight}/> */}
            {children}
            {noFooter ? null : reducedFooter ? (
              <FooterReduced />
            ) : (
              <Footer display={display} />
            )}
            {!isMobile && <Cursor />}
          </App>
        </Container>
      </main>
    </LocomotiveScrollProvider>
  );
}
