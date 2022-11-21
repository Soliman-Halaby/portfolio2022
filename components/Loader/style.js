import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, TitleSection } from "styles/mixins";
import { Title } from "../Popup/SectionTitle/style";
export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  gap: 0rem;
  height: 100vh;
  z-index: 999999;
  overflow: hidden;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-delay: 1s;
  transition-property: visibility opacity;

  background: ${({ theme }) => theme.colors.grey2};
  &.false {
    transition: visibility 0.5s, opacity 0.5s linear;
    visibility: hidden;
    opacity: 0;
    /* display: none; */
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
    transition-delay: 1s;
    transition-property: transform;
    transition: top left 0.1s ease;

    @keyframes cursorAnim {
        0% {
            transform: rotate(0deg):
        }
        50%{
            // transform: rotate(90deg);
        }
        100%{
            transform: rotate(180deg);
        }
    }
    
    svg{
        animation: cursorAnim 2.5s infinite;
    }
    
    &.false{

        /* svg{
            transform: scale(0.5);
            animation: none;
        } */
    }

    ${Title}{
      width: 15rem;
      top: -5rem;
      mix-blend-mode: exclusion;
      color: ${({ theme }) => theme.colors.grey2};
      left: -35rem;
      z-index: 999;

      ${maxMedia.small}{
        top: 0;
        left: -10rem;
      }
    }
`;

export const ImgContainer = styled.div`
  transition: top left 0.1s ease;
  /* transition-delay: 1s; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* transition-property: transform; */
  /* &.false {
    transform: rotate(180deg);
  } */
`;

export const LoaderNumberContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: exclusion;
`;

export const LoaderNumber = styled.span`
  ${TitleSection()}
  color: ${({ theme }) => theme.colors.grey2};
  margin: 0;
  transition: all 0.5s ease;

  &.false {
    transform: translateY(-100%);
  }
  /* transform: ${({ display }) =>
    display === true ? "translateY(0)" : "translateY(-100%)"}; */
`;
