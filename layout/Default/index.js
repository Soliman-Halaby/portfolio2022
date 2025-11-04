import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Head from "next/head";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { loadingState } from "recoil/loaderState";
import { cursorState } from "recoil/cursorState";
import Script from "next/script";
import { NextSeo } from "next-seo";
import Header from "components/Header";
import Footer from "components/Footer";
import FooterReduced from "components/FooterReduced";
import Cursor from "@/components/Cursor";

import Loader from "@/components/Loader";
import { useIsMobile } from "hook";

import { SwitchTransition, Transition } from "react-transition-group";

import gsap from "gsap";
import { App, Wrapper, Container } from "./style";

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
  fullPage,
  contact,
  thumbnail = "/thumbnail.jpg",
}) {
  const containerRef = useRef(null);

  const router = useRouter();

  const loaderDisplay = useRecoilValue(loadingState);
  const setCursorDisplay = useSetRecoilState(cursorState);

  const isMobile = useIsMobile();

  const onPageEnter = (element) => {
    // console.log("exit");
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
    setCursorDisplay("simple");
  };

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: { breakpoint: 880, smooth: true },
        smartphone: { smooth: false },

        // reloadOnContextChange: true,
      }}
      watch={[router.asPath]}
      containerRef={containerRef}
      onUpdate={({ scroll }) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      {/* {loaderDisplay && <Loader />} */}
      <Loader />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
        
    `}
      </Script>

      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-58DXLG6');
          `,
        }}
      />
      {/* End Google Tag Manager */}

      <NextSeo
        title={title}
        description={description}
        canonical={`https://www.solimanalhalaby.fr${router.asPath}`}
        noindex={true}
        nofollow={true}
        openGraph={{
          url: `https://www.solimanalhalaby.fr${router.asPath}`,
          title: title,
          description: description,
          images: [
            {
              url: thumbnail,
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
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://www.solimanalhalaby.fr/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "https://www.solimanalhalaby.fr/icon/apple-touch-icon.png",
            sizes: "76x76",
          },
          {
            rel: "manifest",
            href: "https://www.solimanalhalaby.fr/icon/site.webmanifest",
          },
        ]}
      />

      <Wrapper data-scroll-container ref={containerRef}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58DXLG6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <Container fullPage={fullPage}>
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
      </Wrapper>
    </LocomotiveScrollProvider>
  );
}
