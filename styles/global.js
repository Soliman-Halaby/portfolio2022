import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { maxMedia } from "styles/mixins";
import fontFiles from "styles/fonts";

const styles = ({ fonts }) => {
  return css`
    @font-face {
      font-family: "Romie";
      font-style: normal;
      font-weight: 400;
      src: local("Romie"), local("Romie"),
        url(${fontFiles.RomieRegular}) format("woff");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 200;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayThin}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: italic;
      font-weight: 200;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayThinItalic}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 300;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayLight}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: italic;
      font-weight: 300;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayLightItalic}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 400;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayRoman}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: italic;
      font-weight: 400;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayRomanItalic}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 500;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayMedium}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: italic;
      font-weight: 500;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayMediumItalic}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 600;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayBold}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: italic;
      font-weight: 600;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayBoldItalic}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 600;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayBlack}) format("truetype");
    }
    @font-face {
      font-family: "NeueHaas";
      font-style: normal;
      font-weight: 600;
      src: local("NeueHaas"), local("NeueHaas"),
        url(${fontFiles.NeueHaasDisplayBlackItalic}) format("truetype");
    }

    :root {
      font-size: 0.7vw;
      ${maxMedia.small} {
        font-size: 2.3vw;
      }
    }
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
    p,
    h1,
    h2,
    h3,
    span {
      margin: 0;
      padding: 0;
    }
    html {
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    a {
      text-decoration: none;
    }

    body {
      white-space: pre-line;
      cursor: none;
      font-family: ${fonts.sansSerif};
      margin: 0;
      background: #f2f2f2;
      ${maxMedia.small} {
        cursor: inherit;
      }
    }

    .line {
      overflow: hidden;
    }

    .word {
      padding-bottom: 0.5rem;
    }

    html,
    body {
      /* position: relative; */
      /* height: 100%; */
      margin: 0;
    }

    ::selection {
      background: #1e1e1e;
      color: #d7ff39;
      /* color: #1e1e1e; */
    }

    img {
      user-select: none;
    }
  `;
};

export default styles;
