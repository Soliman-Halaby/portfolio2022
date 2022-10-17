import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, Paragraph } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 12rem;
  margin-bottom: 3rem;

  ${mediaMax.xs} {
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
`;

export const Number = styled.p`
  font-size: 16px;
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 300;
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 12vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
  gap: 15vw;

  ${mediaMax.xs} {
    width: auto;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 300;
  line-height: 56px;
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
  font-size: 14px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  ${mediaMax.xs} {
    gap: 1.5rem;
  }
`;

export const Content = styled.p`
  ${Paragraph()}
`;
