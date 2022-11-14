import styled from "@emotion/styled";

import { maxMedia } from "styles/mixins";

import Image from "next/image";
export const Box = styled.div`
  position: absolute;
  /* background: #111; */
  /* height: 40px;
      width: 40px; */
  user-select: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.grey2};
  text-transform: uppercase;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  border-radius: 8px;
  letter-spacing: 0px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  padding: 5px 10px;
  font-size: 4rem;

  /* font-size: 40px; */
  &.rounded {
    border-radius: 200px;
    padding: 5px 20px;
  }

  ${maxMedia.xs} {
    font-size: 7vw;
  }
`;

export const SceneContainer = styled.div`
  width: 100vw;
  /* overflow: hidden; */
  canvas {
    opacity: 0;
  }
`;
export const Ground = styled.div`
  position: absolute;

  bottom: 77.5px;
  height: 1px;
  width: 100%;
  left: 0;
  background: #666;
`;
export const Title = styled.h2`
  position: absolute;
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  user-select: none;
  font-size: 20rem;
  line-height: 19rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${maxMedia.small} {
    font-size: 10rem;
    line-height: 10rem;
  }
  ${maxMedia.xs} {
    /* font-size: 20vw; */
  }
`;

export const Detail = styled.div`
  position: absolute;
  bottom: 77.5px;
  pointer-events: none;
  right: 0;
  user-select: none;
  display: none;
  width: 50vw;
  height: 60vh;
  z-index: 9;
  margin-right: 2rem;
  padding: 3rem;
  transform: translateY(100%);
  visibility: hidden;
  /* display: none; */
  /* opacity: 0; */
  background: ${({ theme }) => theme.colors.lime};
  will-change: transform;
  transition: all 0.5s ease-in-out;

  &.opened {
    pointer-events: all;
    visibility: visible;
    transform: translateY(0%);
    /* display: block; */
    /* opacity: 1; */
  }

  ${maxMedia.small} {
    width: calc(100% - 2rem);
    margin-right: 0;
    height: 70vh;
  }
`;

export const DetailContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const Label = styled.h2`
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-style: dashed;
  background: ${({ theme }) => theme.colors.grey2};
  border-radius: 8px;
  display: inline-block;
  text-align: left;
`;

export const Description = styled.p`
  width: 60%;
  font-size: 1.2rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const OtherFactsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.8rem;
  align-items: center;
  gap: 2rem;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const MatterContainer = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  ${maxMedia.xs} {
    height: 100vh;
    overflow: hidden;
    width: 100%;
  }
`;

export const CloseBtnContainer = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  right: 0 !important;
  top: 0;
`;
export const CloseBtn = styled(Image)``;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ControlContainer = styled.div`
  width: 4.5rem;
  cursor: pointer;
  height: 3rem;
  background: ${({ theme }) => theme.colors.grey2};
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
`;

export const Control = styled(Image)``;
