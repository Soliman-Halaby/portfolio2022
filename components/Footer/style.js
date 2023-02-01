import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: relative;
  /* margin: ${({ theme }) => theme.margin.medium}; */
  // margin-top: 300px;
  margin-bottom: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* ${Title} {
    top: 25%;
    left: 15%;
  } */

  ${maxMedia.small} {
    /* min-height: 110vh; */
    /* height: 120vh; */
    gap: 15rem;
  }
`;

export const SubWrapper = styled(Wrapper)`
  margin-right: 0;
  margin-bottom: 0;
`;
export const Title = styled.h3`
  line-height: 19rem;
  opacity: 0;
  /* font-size: clamp(42px, 11.15vw, 220px); */
  font-size: 16rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.grey1};
  font-weight: 400;
  text-align: center;
  margin: 2.5rem 0;
  margin-top: ${({ display }) => (display ? "4rem" : "0")};
  // margin-left: ${({ theme }) => theme.margin.medium};

  letter-spacing: 0.15rem;
  transition: all 0.7s cubic-bezier(0.05, 0.56, 0.14, 0.99);

  ${maxMedia.small} {
    font-size: 9rem;
    text-align: center;
    line-height: 11rem;
    letter-spacing: 1px;
  }

  .word {
    padding: 0;
  }
  ${maxMedia.xs} {
    font-size: 9rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  ${maxMedia.md} {
    flex-direction: column;
  }

  ${maxMedia.small} {
    gap: 5rem;
  }
`;

export const SubContainer = styled.div`
  width: 50%;
  display: flex;

  ${maxMedia.md} {
    width: 100%;
  }

  &:nth-of-type(1) {
    display: flex;
    align-items: flex-end;
  }
  &:nth-of-type(2) {
    height: 55vh;
    width: 80%;
    ${maxMedia.md} {
      width: 100%;
      height: 60vh;
    }
    ${maxMedia.small} {
      height: auto;
    }
    img {
      width: 100%;
      height: 100%;
      /* max-height: 40rem; */
      object-fit: cover;

      ${maxMedia.xs} {
        max-height: inherit;
        height: 100%;
      }
    }
    ${maxMedia.xs} {
      /* height: ${({ display }) =>
        display === "normal" ? "40vh" : "90vh"}; */
      height: 36vh;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 97%);
  transition: all 0.7s cubic-bezier(0.05, 0.56, 0.14, 0.99);
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Image = styled.img`
  /* clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 97%);
  transition: 0.4s linear;

  &.is-inview {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: scale(1.2);
    transition: 0.4s linear;
  } */
`;

export const Text = styled.h3`
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  margin: 1rem 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey1};
  ${maxMedia.small} {
    font-size: 1.4rem;
  }
`;

export const FooterNav = styled.div`
  //   background: red;
  // padding-left: 5%;
  // padding-bottom: 5%;
  width: 100%;
  padding-left: ${({ theme }) => theme.margin.medium};
  padding-bottom: ${({ theme }) => theme.margin.medium};

  ${Text} {
    &:nth-of-type(1) {
      opacity: 0;
      margin-bottom: 4.5rem;
    }
  }
`;

export const Content = styled(Text)`
  width: 100px;

  ${maxMedia.xs} {
    width: 120px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 1rem;
  opacity: 0;

  &:nth-of-type(1) {
    overflow: visible;
  }

  &:nth-of-type(3) {
    ${Content} {
      margin-bottom: 0;
    }
  }

  ${maxMedia.small} {
    margin-bottom: 0.75rem;
  }
`;
export const TitleContainer = styled.div`
  position: relative;
  margin: 0px 1rem;
  margin-top: 3rem;
  ${maxMedia.xs} {
    margin-top: 4rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0.3rem;
  max-width: 320px;
  display: flex;
  position: relative;
  gap: 0.5rem;
  align-items: center;
`;

export const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "5px")};
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.25s ease;
  // background: blue;

  &:hover {
    ${({ rounded }) => (rounded ? "33px" : "5px")};
    background: ${({ rounded, theme }) =>
      rounded ? `${theme.colors.lime}` : `${theme.colors.grey1}`};
    border: 1px solid
      ${({ rounded, theme }) =>
        rounded ? `${theme.colors.grey1}` : `${theme.colors.lime}`};
    border-style: dashed;
    color: ${({ rounded, theme }) =>
      rounded ? `${theme.colors.grey1}` : `${theme.colors.grey2}`};
    border-radius: ${({ rounded }) => (rounded ? "5px" : "5px")};
    transition: all 0.2s ease;
  }
`;
