import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: absolute;
  bottom: 0;
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

  ${maxMedia.xs} {
    flex-direction: column;
  }
`;

export const NavElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  // background: lightblue;
  // border-top: 1px solid red;

  ${maxMedia.xs} {
    padding: 1rem 0px;
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
  /* gap: .5rem; */

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
  min-width: 70px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey1};

  ${maxMedia.xs} {
    font-size: 1.35rem;
  }
`;

export const TextContent = styled(Text)`
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Image = styled.img`
  cursor: pointer;
`;
