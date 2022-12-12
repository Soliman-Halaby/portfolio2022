import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const ButtonStyle = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  padding-top: 0.75rem;
  cursor: none;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "5px")};
  font-size: 32px;
  font-size: clamp(24px, 2.55rem, 2.55rem);
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.18, 0.89, 0.41, 1.83);

  ${maxMedia.small} {
    /* font-size: 1.15rem; */
    padding: 0.5rem 0.75rem;
  }
`;

export const Container = styled.div`
  transform-origin: top left;
`;
