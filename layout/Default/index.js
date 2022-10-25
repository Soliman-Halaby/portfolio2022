import { App, Container } from "./style";

import { useRef } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";
import CustomCursor from "@/components/Cursor";

import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Layout({
  children,
  reducedFooter = false,
  noFooter = false,
  scroll= true,
  cursorWidth = 16,
  cursorHeight = 18,
}) {
  
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
    >
      <main data-scroll-container ref={containerRef}>
          <Header />
          <Container>
            <App>
              {/* <CustomCursor width={cursorWidth} height={cursorHeight}/> */}
              {children}
              {noFooter ? null : reducedFooter ? <FooterReduced /> : <Footer />}
            </App>
          </Container>
      </main>
    </LocomotiveScrollProvider>
  );
}
