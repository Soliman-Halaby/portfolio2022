import breakpoints from "./breakpoints";
import theme from "theme";

export const mediaMax = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {});

export const mediaMin = Object.keys(breakpoints)
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

export const title = () => `
  font-size: 8.6rem;
  font-weight: 400;
  line-height: 8.2rem;
  ${mediaMax.sm} {
    font-size: 4.8rem;
    line-height: 5.2rem;
  }
  i {
    display: inline-flex;
    font-style: italic;
  }
`;
