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
import { useIsMobile } from "hook";

import { SwitchTransition, Transition } from "react-transition-group";

import gsap from "gsap";
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
  const containerRef = useRef(null);

  const router = useRouter();
  console.log(router);
  const loaderDisplay = useRecoilValue(loaderState);
  const isMobile = useIsMobile();

  const onPageEnter = (element) => {
    console.log("enter");
    gsap.fromTo(
      element,
      {
        y: 50,
        autoAlpha: 0,
        ease: "power3.out",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  };

  const onPageExit = (element) => {
    console.log("exit");
    gsap.fromTo(
      element,
      {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
  };

  // console.log(route);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: true },
        // reloadOnContextChange: true,
      }}
      watch={[router.asPath]}
      containerRef={containerRef}
      onUpdate={({ scroll }) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      {loaderDisplay && <Loader />}
      <main data-scroll-container ref={containerRef}>
        <Header />
        <Container>
          <SwitchTransition>
            <Transition
              key={router.asPath}
              timeout={500}
              in={true}
              onEnter={onPageEnter}
              onExit={onPageExit}
              mountOnEnter={true}
              appear={true}
              unmountOnExit={true}
            >
              <App>
                {/* <CustomCursor width={cursorWidth} height={cursorHeight}/> */}
                {children}
                {noFooter ? null : reducedFooter ? (
                  <FooterReduced />
                ) : (
                  <Footer number={number} />
                )}
              </App>
            </Transition>
          </SwitchTransition>
          {!isMobile && <Cursor />}
        </Container>
      </main>
    </LocomotiveScrollProvider>
  );
}
