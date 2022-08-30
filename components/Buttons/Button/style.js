import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const ButtonStyle = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 7.5px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "5px")};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease-out;
  line-height: 20px;

  &:hover {
    ${({rounded }) => (rounded ? "33px" : "5px")};
    background: ${({rounded, colored, theme}) =>
      rounded || colored
        ? `${theme.colors.lime}`
        : `${theme.colors.grey1}`};
    border: 1px solid
      ${({rounded, colored, theme}) =>
        rounded || colored
          ? `${theme.colors.grey1}`
          : `${theme.colors.lime}`};
    border-style: dashed;
    color: ${({rounded, colored, theme}) =>
      rounded || colored
        ? `${theme.colors.grey1}`
        : `${theme.colors.grey2}`};
    // border-radius: ${({ rounded }) => (rounded ? "5px" : "5px")};
    transition: all 0.3s ease-out;
  }
`;
