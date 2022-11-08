import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const SuccessMessage = styled.span`
  position: absolute;
  cursor: pointer;
  top: ${({ top }) => `${top}rem`};
  left: ${({ left }) => `${left}rem`};
  transform: translate(-50%, -50%);
  transform: rotate(-4.6deg);
  padding: 7.5px;
  background: ${({ colored, theme }) =>
    colored ? `${theme.colors.lime}` : `${theme.colors.grey2}`};
  border-radius: 39px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  font-size: ${({ colored }) => (colored ? `1rem` : `1.25rem`)};
  /* border-style: dashed; */
  line-height: initial;

  ${maxMedia.small} {
    font-size: ${({ colored }) => (colored ? `1.2` : `1.25rem`)};
  }
`;
