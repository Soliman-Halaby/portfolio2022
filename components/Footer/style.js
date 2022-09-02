import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  // margin-top: 300px;
  margin-bottom: 0;
  min-height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SubWrapper = styled(Wrapper)`
  margin-right: 0;
  margi-bottom: 0;
`;
export const Title = styled.h3`
  font-size: clamp(42px, 11.25vw, 220px);
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.grey1};
  font-weight: 400;
  text-align: center;
  margin: 2.5rem 0;
  margin-left: ${({ theme }) => theme.margin.medium};
  letter-spacing: clamp(1px, 0.25vw, 3px);

  ${mediaMax.xl} {
    font-size: 11vw;
  }
  ${mediaMax.md} {
    font-size: 10vw;
    text-align: start;
    margin-left: ${({ theme }) => theme.margin.small};
  }
  ${mediaMax.xs} {
    font-size: 41px;
    letter-spacing: 1px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  ${mediaMax.md} {
    flex-direction: column;
  }
`;

export const SubContainer = styled.div`
  width: 50%;

  ${mediaMax.md} {
    width: 100%;
  }

  &:nth-of-type(1) {
    display: flex;
    align-items: flex-end;
  }
  &:nth-of-type(2) {
    width: 80%;
    ${mediaMax.md} {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      max-height: 470px;
      object-fit: cover;
    }
  }
`;
export const Image = styled.img``;

export const FooterNav = styled.div`
  //   background: red;
  // padding-left: 5%;
  // padding-bottom: 5%;
  width: 100%;
  margin-left: ${({ theme }) => theme.margin.medium};
`;

export const Text = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  margin: 1rem 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey1};
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Content = styled(Text)`
  width: 100px;
`;
export const TitleContainer = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 5px;
  max-width: 320px;
  // background: red;
  display: flex;
  position: relative;
  gap: 0.5rem;
  align-items: center;
`;

export const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 7.5px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "5px")};
  font-size: 14px;
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
