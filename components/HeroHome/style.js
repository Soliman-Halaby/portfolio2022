import styled from "@emotion/styled";
import { css } from "@emotion/react";

import {Title as TitleSection} from "@/components/SectionTitle/style";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${mediaMax.xs}{
    margin-top: 52px;
  }
  .hero_title-section{
    top: 20%;
    ${mediaMax.xs}{
      top: 40%;
      left: 25%;
    }
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const TitleContainer = styled.div`
  position: relative;
`
export const Title = styled.h2`
position: relative;
  font-size: 72px;
  line-height: 70px;
  display: inline-block;
  letter-spacing: -2;
  text-align: ${({alignRight}) => (alignRight ? `right` : `initial`)};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;

  .hero_pin-section{
    top: 30%;
    right: 10%;
    left: inherit;
  }
`;

export const Image = styled.img``