import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import { RecoilRoot, useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";
import Cursor from "@/components/Cursor";

import Loader from "@/components/Loader";
import useIsMobile from "hook";

import { App, Container } from "./style";

export default function Layout({
  children,
  reducedFooter = false,
  noFooter = false,
  scroll = true,
  cursorWidth = 16,
  cursorHeight = 18,
  number = "01",
}) {
  const { route } = useRouter();
  const containerRef = useRef(null);

  const loaderDisplay = useRecoilValue(loaderState);
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
      {loaderDisplay && <Loader />}
      <main data-scroll-container ref={containerRef}>
        <Header />
        <Container>
          <App>
            {/* <CustomCursor width={cursorWidth} height={cursorHeight}/> */}
            {children}
            {noFooter ? null : reducedFooter ? (
              <FooterReduced />
            ) : (
              <Footer number={number} />
            )}
            {!isMobile && <Cursor />}
          </App>
        </Container>
      </main>
    </LocomotiveScrollProvider>
  );
}
