import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Container = styled.div``;
export const ButtonStyle = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: 50%;
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  line-height: 1.3rem;

  &:hover {
    background: ${({ theme }) => theme.colors.lime};
    color: ${({ theme }) => theme.colors.grey1};
    transition: all 0.3s ease-out;
  }
`;
