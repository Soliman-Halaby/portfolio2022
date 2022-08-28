import styled from "@emotion/styled";
import { mediaMax, title } from "styles/mixins";
import theme from "theme";

export const HeroSection = styled.div`
  background-color: red;
  ${mediaMax.xs} {
    background-color: blue;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-family: ${theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;
