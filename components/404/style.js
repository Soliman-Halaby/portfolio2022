import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { maxMedia } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};

  padding: 0px 20px;
  margin-bottom: 5rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  text-align: center;
  line-height: 12rem;
  color: ${({ theme }) => theme.colors.grey1};
  font-weight: 300;
  position: relative;

  opacity: 0;
  ${maxMedia.small} {
    font-size: 9rem;
    line-height: 10rem !important;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div``;
export const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 7rem;
  margin-bottom: 10rem;

  .line {
    padding: 1rem 0;

    &:nth-of-type(1) {
      transform: translateY(3rem);
      ${Title} {
        line-height: 17rem;
      }
    }
    &:nth-of-type(3) {
      transform: translateY(-3.5rem);
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  position: absolute;
  right: 6rem;
  top: 50%;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey1};
  margin-bottom: 36px;
  margin-top: 12px;
  ${maxMedia.small} {
    right: 0;
  }
`;
