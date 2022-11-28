import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const SuccessMessageContent = styled.p`
  /* padding: 7.5px; */
`;

export const SuccessMessageContentContainer = styled.div`
  overflow: hidden;

  display: flex;
  &:nth-of-type(1) {
    ${SuccessMessageContent} {
      will-change: transform;
      transform-style: preserve-3d;
      transition: 0.2s;
      /* transition-delay: calc(0.05s * var(--index)); */
      transform-origin: bottom;
      display: inline-block;
    }
  }
  &:nth-of-type(2) {
    ${SuccessMessageContent} {
      /* @keyframes animEnter {
        0% {
          transform: translateY(100%);
        }
        // 50% {
        //     transform: rotate(360deg);
        // }
        100% {
          transform: translateY(0%);
          // opacity: 0;
        }
      } */
       {
        position: absolute;
        will-change: transform;
        /* transform-style: preserve-3d; */
        transition: 0.3s;
        /* transition-delay: calc(0.05s * var(--index)); */
        /* transform-origin: top; */
        display: inline-block;
        animation: animEnter 0.3s forwards;
        animation-delay: 10s;
        /* transform: translate3d(0, 100%, 0) rotateX(-90deg); */
        transform: translateY(100%);
      }
    }
  }
`;
export const SuccessMessage = styled.div`
  opacity: ${({ colored }) => (colored ? 1 : 0)};
  position: absolute;
  overflow: ${({ colored }) => (colored ? "visible" : "hidden")};
  padding: 7.5px;
  top: ${({ top }) => `${top}rem`};
  left: ${({ left }) => `${left}rem`};
  transform: translate(-50%, -50%);
  transform: rotate(-4.6deg);
  /* padding: 7.5px; */
  background: ${({ colored, theme }) =>
    colored ? `${theme.colors.lime}` : `${theme.colors.grey2}`};
  border-radius: 39px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  font-size: ${({ colored }) => (colored ? `1rem` : `1.25rem`)};
  /* border-style: dashed; */
  line-height: initial;
  display: flex;
  flex-direction: column;

  ${maxMedia.small} {
    font-size: ${({ colored }) => (colored ? `1.2` : `1.25rem`)};
  }

  &:hover {
    ${SuccessMessageContent} {
      &:nth-of-type(1) {
        transform: translateY(-100%);
        /* transform: translate3d(0, -100%, 0) rotateX(-90deg); */
      }

      &:nth-of-type(2) {
        /* transform: translate3d(0, 0%, 0) rotateX(0deg); */
        transform: translateY(0%);
      }
    }
  }
`;
