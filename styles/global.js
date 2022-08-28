import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { mediaMax } from "styles/mixins";
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

    *,
    *::after,
    *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
    html {
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    body {
      font-family: ${fonts.sansSerif};
      background: ${({ theme }) => {
        theme.colors.grey2;
      }}
      margin: 0;
      background: #f2f2f2;
        ${mediaMax.xs} {
      }
    }
  `;
};

export default styles;
