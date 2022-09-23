import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Container = styled.div``;
export const TagStyle = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 7.5px 10px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-style: ${({ borderStyle }) => (borderStyle ? "dashed" : "plain")};
  color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ rounded }) => (rounded ? "33px" : "5px")};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  margin: 0;

  &:nth-of-type(2) {
    border-radius: 33px;
  }
`;
