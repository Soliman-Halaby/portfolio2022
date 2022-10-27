import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Button from "@/components/Buttons/Button/style";
import { maxMedia, TitleSection } from "styles/mixins";

import { ButtonStyle } from "../Buttons/Button/style";

export const Wrapper = styled.div`
  max-width: 106px;
  z-index: 2;
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  position: relative;

  ${ButtonStyle} {
    position: absolute;
    background: ${({ theme }) => theme.colors.lime};
    border-style: dashed;
    pointer-events: none;
    left: -100%;
    width: 120%;
    display: flex;
    align-items: center;
    z-index: 999;
    gap: 0.25rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  margin: 0px 20px;
`;

export const ImageContainer = styled.div`
  height: 154px;
  width: 100%;
  overflow: hidden;
  position: relative;

`
export const Image = styled.img`
  filter: grayscale(1);
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  /* max-width: 106px; */
  object-fit: cover;
  height: 140%;
  will-change: transform;
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

export const Number = styled.span`
  font-size: 12px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
`;

export const Title = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
`;
