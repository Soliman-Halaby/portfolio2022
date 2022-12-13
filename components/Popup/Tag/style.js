import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Container = styled.div``;
export const TagStyle = styled.span`
  padding: 3px 10px;
  /* height: 26px; */
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-style: ${({ borderStyle }) => (borderStyle ? "dashed" : "plain")};
  color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "4px")};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  margin: 0;
  line-height: 14px;
  display: ${({ borderStyle }) => (borderStyle ? "flex" : "")};
  align-items: center;

  &:nth-of-type(2) {
    border-radius: 33px;
  }

  svg {
    margin-right: 0.25rem;
  }
`;
