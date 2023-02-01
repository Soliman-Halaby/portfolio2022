import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { maxMedia, Paragraph } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 10rem;
  margin-bottom: 6rem;

  ${maxMedia.small} {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

export const Number = styled.p`
  font-size: 1.3rem;
  margin-top: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 300;

  ${maxMedia.small} {
    font-size: 1.85rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 10rem;
  padding-left: 8rem;
  display: flex;
  flex-direction: row;
  gap: 15vw;

  ${maxMedia.small} {
    width: auto;
    flex-direction: column;
    gap: 2rem;
  }

  ${maxMedia.small} {
    padding-left: 2rem;
    padding-right: 0;
  }
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 300;
  line-height: 5rem;
  white-space: preline;

  ${maxMedia.small} {
    font-size: 3.7rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  text-transform: uppercase;
  font-weight: 300;
  max-width: 165px;
  font-size: 1.15rem;

  ${maxMedia.small} {
    font-size: 1.4rem;
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 7rem;
  ${maxMedia.small} {
    gap: 1.5rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 3rem;
  ${maxMedia.small} {
    flex-direction: column;
  }
`;

export const Content = styled.p`
  ${Paragraph()}

  ${maxMedia.small} {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;
