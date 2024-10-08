import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Button from "@/components/Buttons/Button/style";
import { maxMedia, TitleSection } from "styles/mixins";

import { ButtonStyle } from "../Buttons/Button/style";

import Image from "next/image";
export const Wrapper = styled.div`
  max-width: 106px;
  z-index: 2;
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  /* position: relative; */

  /* overflow: hidden; */
`;

export const Container = styled.div`
  width: 100%;
  margin: 0px 20px;
`;

export const ImageContainer = styled.div`
  /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); */
  height: 154px;
  width: 100%;
  /* opacity: 0; */
  overflow: hidden;
  transition: clip-path 0.6s ease-in-out;
  position: relative;

  ${maxMedia.small} {
    height: 116px;
  }
`;

export const ImageWrapper = styled.div`
  height: 176px;

  position: relative;
  img {
    min-height: 200px !important;
    position: relative;
    top: -8%;
  }
`;
export const ImageBlock = styled.img`
  filter: grayscale(1);
  top: 0;
  left: 0;

  width: 100%;
  /* max-width: 106px; */
  object-fit: cover;
  height: 100%;
  /* will-change: transform; */
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  /* max-width: 106px; */
  margin-top: 0.75rem;
  gap: 0.5rem;
`;

export const Number = styled.p`
  font-size: clamp(10px, 1rem, 10px);
  max-height: 1rem;
  min-width: 15px;

  overflow: hidden;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  ${maxMedia.md} {
    font-size: 1.75rem;
  }
  ${maxMedia.small} {
    font-size: 1rem;
  }

  .word {
    padding: 0;
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;

  // if the word is Courchevel, it will be split into 2 lines if it doesn't fit making it look like this: Courchev el

  overflow-wrap: break-word;
  text-transform: uppercase;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  ${maxMedia.md} {
    font-size: 2.2rem;
  }

  ${maxMedia.small} {
    font-size: 1.15rem;
    font-size: 12px;
  }

  .word {
    padding: 0;
  }
`;
