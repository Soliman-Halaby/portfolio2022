import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Logo = styled.img`
  z-index: 2;
  width: 1.5rem;
  height: auto;
  position: absolute;
  left: 50%;
  right: 50%;
`;

export const MainLink = styled.a`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  mix-blend-mode: difference;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey2};
  text-decoration: none;
  font-weight: 300;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-item: center;
  z-index: 999;
  //   background: red;
  width: 100%;
  position: fixed;
  padding: ${({ theme }) => theme.margin.medium};
  top: 20px;
  width: 100%;
  mix-blend-mode: exclusion;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 1rem;
`;
