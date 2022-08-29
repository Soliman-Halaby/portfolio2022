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

`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const Title = styled.h2`
${TitleSection()}

position: relative;
  text-align: ${({alignRight}) => (alignRight ? `right` : `initial`)};

  .hero_pin-section{
    top: 30%;
    right: 10%;
    left: inherit;
  }
`;

export const Image = styled.img``