import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { motion } from "framer-motion";

import Image from "next/image";
// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { SuccessMessage } from "../Popup/Pin/style";
import { maxMedia, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  /* margin: ${({ theme }) => theme.margin.medium}; */
  padding: ${({ theme }) => theme.margin.medium};
  margin-top: 10rem;

  ${maxMedia.xs} {
    /* padding-top: 52px; */
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  .box {
    transform-origin: center;
  }

  ${SuccessMessage} {
    top: 30rem;
    right: 15rem;
    left: inherit;
    ${maxMedia.small} {
      top: 28rem;
      right: 10rem;
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

  ${maxMedia.xs} {
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

  ${maxMedia.xs} {
    height: 60vh;
  }

  span span {
    ${maxMedia.xs} {
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
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey1};

  svg {
    margin-left: 0.5rem;
  }
`;
