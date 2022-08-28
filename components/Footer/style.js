import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: relative;
  margin-top: 300px;
`;

export const Title = styled.h3`
  font-size: clamp(42px, 11vw, 220px);
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.grey1};
  font-weight: 400;
  text-align: center;
  letter-spacing: clamp(1px, 0.25vw, 3px);

  ${mediaMax.md} {
    font-size: 10vw;
    text-align: start;
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
    flex-direction: column-reverse;
  }
`;

export const SubContainer = styled.div`
  width: 50%;

  ${mediaMax.md} {
    width: 100%;
  }

  &:nth-child(1) {
    display: flex;
    align-items: flex-end;
  }
  &:nth-child(2) {
    width: 80%;
    ${mediaMax.md} {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const Image = styled.img``;

export const FooterNav = styled.div`
  //   background: red;
  padding-left: 5%;
  padding-bottom: 5%;
  width: 100%;
`;

export const Text = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
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
export const TextContainer = styled.div``;

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

export const SuccessMessage = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0%;
  left: 45%;
  transform: translate(-50%, -50%);
  transform: rotate(-4.6deg);
  padding: 7.5px;
  background: ${({ theme }) => theme.colors.lime};
  border-radius: 39px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  font-size: 10px;
  border-style: dashed;
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
    ${(props) => (props.rounded ? "33px" : "5px")};
    background: ${(props) =>
      props.rounded
        ? `${props.theme.colors.lime}`
        : `${props.theme.colors.grey1}`};
    border: 1px solid
      ${(props) =>
        props.rounded
          ? `${props.theme.colors.grey1}`
          : `${props.theme.colors.lime}`};
    border-style: dashed;
    color: ${(props) =>
      props.rounded
        ? `${props.theme.colors.grey1}`
        : `${props.theme.colors.grey2}`};
    border-radius: ${({ rounded }) => (rounded ? "5px" : "5px")};
    transition: all 0.2s ease;
  }
`;

export const CircularButton = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 7.5px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: 131px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.grey1};
  }
`;
