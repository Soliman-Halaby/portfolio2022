import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, TitleSection } from "styles/mixins";

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
${TitleSection()}
margin: 2.5rem 0;

position: relative;
  text-align: ${({alignRight}) => (alignRight ? `right` : `initial`)};

  .hero_pin-section{
    top: 30%;
    right: 10%;
    left: inherit;
  }
`;

export const Image = styled.img``