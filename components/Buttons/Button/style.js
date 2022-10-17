import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const ButtonStyle = styled.span`
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
  line-height: 19px;
  transition: all 0.3s ease-out;
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  gap: 0.5rem;
  border-style: solid;
  transition: background 0.3s ease;

  &:hover {
    ${({ rounded }) => (rounded ? "33px" : "5px")};
    background: ${({ theme }) => theme.colors.lime};
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    border-style: dashed;
    color: ${({ rounded, colored, theme }) => theme.colors.grey1};
    transition: background 0.3s ease;

    /* svg path {
      stroke: ${({ rounded, colored, theme }) =>
      rounded || colored ? `${theme.colors.grey1}` : `${theme.colors.grey2}`};
    } */
  }
`;

export const Container = styled.div``;
