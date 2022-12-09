import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { maxMedia, TitleSection } from "styles/mixins";

import { Container } from "../Buttons/ProjectButton/style";
export const Cursor = styled.div`
  width: ${({ custom }) => (custom === "simple" ? "20px" : "16rem")};
  height: 20px;
  z-index: 99999;
  // border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  /* transition: all 0.1s linear; */
  // mix-blend-mode: difference;

  &:after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    // border: 2px solid blue;
    // border-radius: 50%;
    opacity: 0.5;
    top: -8px;
    left: -8px;
  }
`;

export const CursorWrapper = styled.div`
  position: relative;
`;

export const CursorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  svg {
    transition: all 0.3s ease;
  }

  &:nth-of-type(1){
    width: 16px;
  height: 16px;
  }

  @keyframes cursorAnim {
        0% {
            transform: rotate(0deg):
        }
        // 50% {
        //     transform: rotate(360deg);
        // }
        100% {
            transform: rotate(360deg);
            // opacity: 0;
        }
    }

    &.expand{
        animation: cursorAnim .5s forwards;

    }
`;
