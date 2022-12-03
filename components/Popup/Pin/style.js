import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const SuccessMessageContent = styled.p`
  @keyframes up {
    0% {
      transform: translateY(0);
    }
    4% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  /* padding: 7.5px; */
  animation-name: up;
  animation-duration: 7s;
  animation-timing-function: ease;
  animation-delay: 4s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-timeline: auto;
`;

export const SuccessMessageContentContainer = styled.div`
  overflow: hidden;

  display: flex;

  &:nth-of-type(1) {
    ${SuccessMessageContent} {
      will-change: transform;
      transform-style: preserve-3d;
      transition: 0.2s;
    }
  }
  &:nth-of-type(2) {
    ${SuccessMessageContent} {
       {
        position: absolute;
        will-change: transform;
        transition: 0.3s;
        display: inline-block;
        transform: translateY(100%);
      }
    }
  }
`;
export const SuccessMessage = styled.div`
  opacity: ${({ colored }) => (colored ? 1 : 0)};
  position: absolute;
  overflow: hidden;
  padding: 7.5px;
  top: ${({ top }) => `${top}rem`};
  left: ${({ left }) => `${left}rem`};
  transform: translate(-50%, -50%);
  transform: rotate(-4.6deg);
  background: ${({ colored, theme }) =>
    colored ? `${theme.colors.lime}` : `${theme.colors.grey2}`};
  border-radius: 39px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  font-size: ${({ colored }) => (colored ? `1rem` : `1.25rem`)};
  line-height: initial;
  display: flex;
  flex-direction: column;

  ${maxMedia.small} {
    font-size: ${({ colored }) => (colored ? `1.2` : `1.25rem`)};
  }
`;
