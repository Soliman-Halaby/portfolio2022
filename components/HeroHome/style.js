import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { motion } from "framer-motion";

import Image from "next/image";
// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { ContainerPin } from "../Popup/Pin/style";
import { maxMedia, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  /* margin: ${({ theme }) => theme.margin.medium}; */
  padding: ${({ theme }) => theme.margin.medium};
  margin-top: 10rem;

  ${maxMedia.xs} {
    /* padding-top: 52px; */
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  .box {
    transform-origin: center;
  }

  ${ContainerPin} {
    top: 30rem;
    right: 15rem;
    left: inherit;
    ${maxMedia.small} {
      top: 32rem;
      right: 10rem;
    }
  }
`;

export const TitleContainer = styled.div`
  position: relative;
`;
export const Title = styled.h1`
  ${TitleSection()}
  margin: 2.5rem 0;
  line-height: 6.5rem;

  opacity: 0;
  position: relative;
  text-align: ${({ alignRight }) => (alignRight ? `right` : `initial`)};

  ${maxMedia.xs} {
    margin: 4rem 0;

    font-size: 40px;
    font-size: 4.6rem;
    line-height: 4.6rem;
    :nth-of-type(1) {
      margin-top: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 90vh;
  height: 90vh;
  overflow: hidden;
  transform-origin: center;
  position: relative;

  clip-path: polygon(35% 0px, 65% 0px, 65% 100%, 35% 100%);
  transition: all 0.4s ease-in-out;
  ${maxMedia.xs} {
    height: 60vh;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 90vh;
  transform: scale(1.15);
  transition: all 0.3s ease-in-out;

  ${maxMedia.xs} {
    height: 60vh;
  }
`;
export const BlockImage = styled(Image)`
  object-fit: cover;
`;

export const Text = styled.p`
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

  display: inline-block;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 1.25rem;
  /* font-size: 16px; */
  margin-bottom: 8px;
  will-change: transform;
  transform-style: preserve-3d;
  transition: 0.2s;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey1};

  svg {
    margin-left: 0.5rem;
  }
  svg path {
    color: ${({ theme }) => theme.colors.grey1};
  }

  /* padding: 7.5px; */

  /* animation-name: up; */
  animation-duration: 8s;
  animation-timing-function: ease;
  animation-delay: 7s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-timeline: auto;
`;

export const TextContent = styled.p`
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;

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

export const TextWrapper = styled.div`
  overflow: hidden;

  display: flex;

  &:nth-of-type(1) {
    ${TextContent} {
      will-change: transform;
      transform-style: preserve-3d;
      transition: 0.2s;
    }
  }
  &:nth-of-type(2) {
    ${TextContent} {
       {
        position: absolute;
        will-change: transform;
        transition: 0.3s;
        /* display: inline-block; */
        transform: translateY(100%);
      }
    }
  }
`;
export const TextContainer = styled.div`
  overflow: hidden;
  padding: 7.5px 0;
  display: inline-block;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  /* font-size: 16px; */
  margin-bottom: 8px;
  will-change: transform;
  transform-style: preserve-3d;
  transition: 0.2s;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey1};

  ${maxMedia.small} {
    font-size: ${({ colored }) => (colored ? `1.2` : `1.25rem`)};
  }
`;
