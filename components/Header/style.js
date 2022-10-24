import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import { mediaMax, title } from "styles/mixins";

export const Logo = styled.img`
  z-index: 2;
  width: 1.5rem;
  height: auto;
  position: absolute;
  left: 50%;
  cursor: pointer;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MainLink = styled.span`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  mix-blend-mode: difference;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  // color: ${({ theme }) => theme.colors.grey2} !important;
  font-weight: 300;
  a {
    color: ${({ theme }) => theme.colors.grey2};
    text-decoration: none;
    position: relative;
    padding-bottom: 3px;

    &:after {
      content: "";
      position: absolute;
      top: 80%;
      left: 0;
      width: 0;
      height: 1px;
      background: ${({ theme }) => theme.colors.grey2};
      transition: width ease-out 0.3s;
    }

    &:hover {
      &:after {
        width: ${({ noAnim }) => (noAnim ? "0%" : "100%")};
      }
    }
  }
`;

export const NavLink = styled(Link)``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  z-index: 99999;
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
