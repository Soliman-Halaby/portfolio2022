import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: relative;
  /* margin-top: 10rem; */

  ${maxMedia.xs} {
    // display: none;
  }
`;

export const Nav = styled.div`
  margin: ${({ theme }) => theme.margin.medium};
  display: flex;
  //   gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;

  ${maxMedia.small} {
    flex-direction: column;
  }
`;

export const NavElement = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7rem;
  // background: lightblue;
  // border-top: 1px solid red;

  ${maxMedia.small} {
    padding: 1rem 0px;
    gap: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.grey1};
    flex-direction: column;
    align-items: flex-start;

    &.mobile-hide {
      display: none;
    }
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;

  ${maxMedia.xs} {
    &.with-arrow {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.15rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey1};

  ${maxMedia.small} {
    font-size: 1.4rem;
  }
`;

export const Image = styled.img``;
