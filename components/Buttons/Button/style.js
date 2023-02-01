import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 0.5rem;
  padding-top: 0.55rem;
  cursor: none;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.grey1};
  background: ${({ theme }) => theme.colors.grey2};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "4px")};
  font-size: 1.05rem;

  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  line-height: clamp(21px, 100%, 1.3rem);
  transition: all 0.3s ease-out;
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  gap: 0.5rem;
  border-style: solid;
  background: ${({ theme }) => theme.colors.grey2};
  transition: background 0.3s ease;

  &:hover {
    ${({ rounded }) => (rounded ? "33px" : "4px")};
    background: ${({ theme }) => theme.colors.lime};
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    border-style: dashed;
    color: ${({ theme }) => theme.colors.grey1};
    transition: background 0.3s ease;

    /* svg path {
      stroke: ${({ rounded, colored, theme }) =>
      rounded || colored ? `${theme.colors.grey1}` : `${theme.colors.grey2}`};
    } */

    &:focus {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.grey2};
      border-color: ${({ theme }) => theme.colors.lime};

      /* svg {
        stroke: ${({ theme }) => theme.colors.grey2};
        path: ${({ theme }) => theme.colors.grey2};
      } */
    }
  }

  ${maxMedia.small} {
    font-size: 1.4rem;
    height: 3.5rem;
    padding: 0.9rem;
    padding-top: 1rem;
  }
`;

export const Container = styled.div``;
