import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { motion } from "framer-motion";

import Image from "next/image";
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
      top: 15%;
      left: 10%;
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

  .hero_pin-section {
    top: 20%;
    right: 10%;
    left: inherit;
    ${mediaMax.xs} {
      top: 35%;
      right: 25%;
    }
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

  ${mediaMax.xs} {
    margin: 4rem 0;

    :nth-of-type(1) {
      margin-top: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  transform-origin: center;

  ${mediaMax.xs} {
    height: 60vh;
  }

  span span {
    ${mediaMax.xs} {
      padding-top: 60vh !important;
    }
  }
`;
export const BlockImage = styled(Image)`
  object-fit: cover;
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
