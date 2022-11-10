import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  gap: 0rem;
  height: 100vh;
  z-index: 999999;
  overflow: hidden;
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
    height: 100vh;
    position: relative;
    transition-delay: 1s;
    transition-property: transform;

    @keyframes cursorAnim {
        0% {
            transform: rotate(0deg):
        }
        50%{
            // transform: rotate(90deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    
    svg{
        animation: cursorAnim 2s infinite;
    }
    
    &.false{

        /* svg{
            transform: scale(0.5);
            animation: none;
        } */
    }
`;

export const ImgContainer = styled.div`
  transition: all 0.3s ease;
  transition-delay: 1s;
  transition-property: transform;
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
