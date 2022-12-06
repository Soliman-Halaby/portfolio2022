import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";

import { Title } from "../Popup/SectionTitle/style";
import { maxMedia, title } from "styles/mixins";

export const Logo = styled.img`
  z-index: 2;
  width: 2rem;
  min-width: 20px;
  height: auto;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MainLink = styled.span`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey2};

  mix-blend-mode: difference;
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  // color: ${({ theme }) => theme.colors.grey2} !important;
  font-weight: 300;
  a,
  p {
    color: ${({ theme }) => theme.colors.grey2};
    text-decoration: none;
    position: relative;
    cursor: none;
    padding-bottom: 3px;

    ${maxMedia.small} {
      padding-bottom: 0;
    }

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

  ${maxMedia.small} {
    font-size: 1.2rem;
    /* font-size: 16px; */
  }
`;

export const NavLink = styled(Link)`
  cursor: none;
`;

export const NavElement = styled.p`
  cursor: none;
`;
export const MenuDisplay = styled.p`
  color: ${({ theme }) => theme.colors.grey2};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  z-index: 99999;
  width: 100%;
  position: fixed;
  padding: ${({ theme }) => theme.margin.medium};
  top: 0px;
  width: 100%;
  mix-blend-mode: exclusion;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SubNav = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 0;
  z-index: 999;
  background: ${({ theme }) => theme.colors.grey2};
  will-change: transform;
  transition: opacity 0.3s ease;
  overflow: visible;
  &.opened {
    opacity: 1;
    overflow: hidden;
    pointer-events: all;
  }
`;

export const SubNavItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
  background: ${({ theme }) => theme.colors.grey2};
  height: 80vh;

  ${Title} {
    margin: 0;
    margin-bottom: 7rem;
    position: inherit;
  }

  ${MainLink} {
    margin: 2rem 0;
    font-size: 1.8rem;
  }

  ${maxMedia.xs} {
    padding-top: 12rem;
  }
`;

export const ItemsContainer = styled.div`
  margin-left: 10rem;
`;
