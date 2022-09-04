import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, Paragraph } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 12rem;
  padding: 0px 20px;
  margin-bottom: 5rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;

export const LabelContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;
export const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
  font-size: 40px;
  opacity: 0.1;
  color: ${({ theme }) => theme.colors.grey1};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey1};
  font-weight: 300;
  ${mediaMax.xs} {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey1};
  margin-bottom: 36px;
  margin-top: 12px;
  ${mediaMax.xs} {
    padding: 0px 20%;
    text-align: center;
  }
`;
