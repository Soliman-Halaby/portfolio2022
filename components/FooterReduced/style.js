import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  // background: pink;
  // height: 50px;
  position: relative;
  margin-top: 300px;

  ${mediaMax.xs}{
    // display: none;
  }
`;

export const Nav = styled.div`
  margin: ${({ theme }) => theme.margin.medium};
  display: flex;
  //   gap: 2rem;
  justify-content: space-between;

  ${mediaMax.xs}{
    flex-direction: column;
  }
`;

export const NavElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  // background: lightblue;
  // border-top: 1px solid red;
  
  ${mediaMax.xs}{
    padding: 1rem 0px;
    border-top: 1px solid ${({ theme }) => theme.colors.grey1};
    flex-direction: column;
    align-items: flex-start;

    &.mobile-hide{
      display: none;
    }
  }

`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;



  ${mediaMax.xs}{
    &.with-arrow{
      width: 100%;
      justify-content: space-between;
    }
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


  }
`;
