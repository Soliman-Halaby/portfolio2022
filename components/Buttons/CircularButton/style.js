import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Container = styled.div``;
export const ButtonStyle = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 7.5px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: 131px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  line-height: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.grey1};
    transition: all 0.3s ease-out;
  }
`;
