import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const SuccessMessage = styled.span`
  position: absolute;
  cursor: pointer;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
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
  font-size: ${({ colored }) => (colored ? `10px` : `14px`)};
  border-style: dashed;
  line-height: initial;
`;
