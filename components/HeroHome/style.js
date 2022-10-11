import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { motion } from "framer-motion";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  /* margin: ${({ theme }) => theme.margin.medium}; */
  padding: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${mediaMax.xs} {
    padding-top: 52px;
  }
  .hero_title-section {
    top: 20%;
    ${mediaMax.xs} {
      top: 40%;
      left: 25%;
    }
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  .box {
    transform-origin: center;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
`;
export const Title = styled.h2`
  ${TitleSection()}
  margin: 2.5rem 0;

  position: relative;
  text-align: ${({ alignRight }) => (alignRight ? `right` : `initial`)};

  .hero_pin-section {
    top: 30%;
    right: 10%;
    left: inherit;
  }
`;

export const Image = styled.img`
  width: 100%;
  transform-origin: center;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey1};

  svg {
    margin-left: 4px;
  }
`;
