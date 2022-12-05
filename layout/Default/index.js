import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Head from "next/head";
import { RecoilRoot, useRecoilValue } from "recoil";
import { loaderState } from "recoil/loaderState";

import { NextSeo } from "next-seo";
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
  title,
  description,
  contact,
}) {
  const containerRef = useRef(null);

  const router = useRouter();
  const loaderDisplay = useRecoilValue(loaderState);
  const isMobile = useIsMobile();

  const onPageEnter = (element) => {
    console.log("exit");
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
    // console.log("exit");
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

  console.log("router", router);
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
      <NextSeo
        title={title}
        description={description}
        canonical={`https://www.solimanalhalaby.fr${router.asPath}`}
        openGraph={{
          url: `https://www.solimanalhalaby.fr${router.asPath}`,
          title: title,
          description: description,
          images: [
            {
              url: "https://portfolio2023-mu.vercel.app/thumbnail.jpg",
              width: 830,
              height: 500,
              alt: "Thumbnail",
              type: "image/jpg",
            },
          ],
          siteName: title,
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <main data-scroll-container ref={containerRef}>
        <Header />
        <Container>
          <SwitchTransition>
            <Transition
              key={router.asPath}
              timeout={800}
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
                  <Footer contact={contact} number={number} />
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
