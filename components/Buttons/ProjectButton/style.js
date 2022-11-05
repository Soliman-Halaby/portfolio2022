import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const ButtonStyle = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 3rem;
  background: ${({ theme }) => theme.colors.lime};
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.grey1};
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.3rem;
  transition: all 0.3s ease-out;
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  gap: 0.5rem;
  border-style: dashed;
  transition: background 0.3s ease;
`;

export const Container = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease;

  &.customButton {
    transition: opacity 0.3s ease;
    opacity: 1;
  }
`;
