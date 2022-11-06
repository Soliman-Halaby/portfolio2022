import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: absolute;
  bottom: 2rem;
  /* margin-top: 10rem; */

  ${maxMedia.xs} {
    // display: none;
  }
`;

export const Nav = styled.div`
  margin: ${({ theme }) => theme.margin.medium};
  display: flex;
  //   gap: 2rem;
  flex-direction: column;

  justify-content: space-between;

  ${maxMedia.xs} {
    flex-direction: column;
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  min-width: 90px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey1};

  ${maxMedia.xs} {
    font-size: 1.35rem;
  }
`;

export const NavElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  // background: lightblue;
  // border-top: 1px solid red;

  padding: 1rem 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey1};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  ${maxMedia.xs} {
    &.mobile-hide {
      display: none;
    }
  }

  &:nth-of-type(1) {
    ${Element} {
      width: 100%;
      justify-content: flex-end;

      ${Text} {
        &:nth-of-type(1) {
          min-width: 140px;
        }
      }
    }
  }
`;

export const TextContent = styled(Text)`
  margin-bottom: 3rem;
  margin-top: 5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${Text} {
    min-width: 75px !important;
  }
`;

export const Image = styled.img`
  cursor: pointer;
`;
