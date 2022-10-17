import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, TitleSection, Paragraph } from "styles/mixins";
import { ButtonStyle } from "../Buttons/Button/style";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${mediaMax.xs} {
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
  text-align: ${({ alignRight }) => (alignRight ? `right` : `initial`)};
  // white-space: pre-line;
  .hero_pin-section {
    top: 30%;
    right: 10%;
    left: inherit;
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  padding-right: 12vw;
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  justify-content: space-between;
  margin-bottom: 2rem;
  ${mediaMax.md} {
    flex-direction: column;
    gap: 2rem;
    padding-right: 0;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: flex-end;
  flex-direction: column;

  ${mediaMax.xs} {
    justify-content: flex-start;
  }
`;

export const TagRow = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const TagSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  ${ButtonStyle} {
    display: flex;
    align-content: center;
    margin-left: 8rem;
  }

  ${mediaMax.xs} {
    &:nth-of-type(2) {
      flex-direction: row;
    }
    ${ButtonStyle} {
      margin-left: 0;
    }
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey1};
  text-transform: uppercase;
  font-weight: 300;
`;

export const Content = styled.p`
  ${Paragraph()}

  align-self: flex-end;
  ${mediaMax.xs} {
    align-self: flex-start;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 90vh;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mediaMax.xs} {
    height: 60vh;
  }
`;
