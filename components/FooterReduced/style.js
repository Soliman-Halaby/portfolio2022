import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: relative;
  margin-top: 300px;
`;

export const Nav = styled.div`
  margin: ${({ theme }) => theme.margin.medium};
  display: flex;
  //   gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  ${mediaMax.xs} {
    flex-direction: column;
  }
`;

export const NavElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  ${mediaMax.xs} {
    flex-direction: column;
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey1};
`;

export const Image = styled.img`
  cursor: pointer;
`;
