import breakpoints from "./breakpoints";
import theme from "theme";

export const maxMedia = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {});

export const minMedia = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {});

export const subtitle = () => `
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: .108rem;
  text-transform: uppercase;
  line-height: 2rem;
  margin-bottom: 2.4rem;
`;

export const TitleSection = () => `
  position: relative;
  font-size: ${theme.fontSizes.title.large};
  line-height: 6rem;
  display: inline-block;
  letter-spacing: -2;
  margin: 2.5rem 0;
  text-align: initial;
  font-family: ${theme.fonts.serif};
  font-weight: 400;

  ${maxMedia.small}{
    font-size: ${theme.fontSizes.title.small};
    line-height: 4rem;
  }
`;

export const Paragraph = () => `
  font-size: 14px;
  line-height: auto;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey1};
  max-width: 300px;
`;
