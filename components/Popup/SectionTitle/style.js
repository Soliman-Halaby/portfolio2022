import styled from "@emotion/styled";
import { maxMedia, title } from "styles/mixins";

import theme from "theme";

export const Title = styled.p`
  font-size: 1.15rem;
  position: absolute;
  left: 25%;
  text-transform: uppercase;
  display: flex;
  align-items: flex-start;
  top: 20rem;
  white-space: break-spaces;
  margin-left: ${({ theme }) => theme.margin.medium};
  margin-top: 48px;
  ${maxMedia.md} {
    /* top: 20%;
    left: 0; */
  }
  ${maxMedia.small} {
    /* top: 15%; */
    top: 10rem;
    font-size: 1.35rem;
  }
`;

export const Number = styled.span`
  font-size: 1rem;
  margin-right: 1rem;

  ${maxMedia.small} {
    font-size: 1.2rem;
  }
`;
