import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Container = styled.div``;
export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 0.5rem;
  cursor: none;
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
    border-style: dashed;
  }

  &:focus {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.grey2};
    border-color: ${({ theme }) => theme.colors.lime};

    /* svg {
        stroke: ${({ theme }) => theme.colors.grey2};
        path: ${({ theme }) => theme.colors.grey2};
      } */
  }
  ${maxMedia.small} {
    font-size: 1.35rem;
    padding: 1rem;
  }
`;
