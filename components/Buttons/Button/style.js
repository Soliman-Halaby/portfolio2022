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
  transition: all 0.3s ease;
  // background: blue;

  &:hover {
    ${(props) => (props.rounded ? "33px" : "5px")};
    background: ${(props) =>
      props.rounded || props.yellow
        ? `${props.theme.colors.lime}`
        : `${props.theme.colors.grey1}`};
    border: 1px solid
      ${(props) =>
        props.rounded || props.yellow
          ? `${props.theme.colors.grey1}`
          : `${props.theme.colors.lime}`};
    border-style: dashed;
    color: ${(props) =>
      props.rounded || props.yellow
        ? `${props.theme.colors.grey1}`
        : `${props.theme.colors.grey2}`};
    // border-radius: ${({ rounded }) => (rounded ? "5px" : "5px")};
    transition: all 0.3s ease;
  }
`;
