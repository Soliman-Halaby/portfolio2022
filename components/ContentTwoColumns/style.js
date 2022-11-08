import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { maxMedia, Paragraph } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 8rem;
  margin-bottom: 3rem;

  ${maxMedia.xs} {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

export const Number = styled.p`
  font-size: 1.3rem;
  margin-top: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 300;
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 20rem;
  padding-left: 8rem;
  display: flex;
  flex-direction: row;
  gap: 15vw;

  ${maxMedia.xs} {
    width: auto;
    flex-direction: column;
    gap: 2rem;
  }

  ${maxMedia.small} {
    padding-right: 3rem;
    margin-left: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 300;
  line-height: 5rem;
  white-space: preline;
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
  font-size: 1.15rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  ${maxMedia.xs} {
    gap: 1.5rem;
  }
`;

export const Content = styled.p`
  ${Paragraph()}
`;
