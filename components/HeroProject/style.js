import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, TitleSection, Paragraph } from "styles/mixins";

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
  padding-right: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  ${mediaMax.md} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  flex-direction: column;
`;

export const TagRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const TagSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .project-visit-cta {
    margin-left: 4rem;
  }

  ${mediaMax.xs}{
    &:nth-of-type(2){
      flex-direction: column;
      align-items: flex-start;
    }
    .project-visit-cta {
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
`;
export const Image = styled.img`

  ${mediaMax.xs}{
    height: 60vh;
    object-fit: cover;
  }
`;
