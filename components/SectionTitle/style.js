import styled from "@emotion/styled";
import { mediaMax, title } from "styles/mixins";
import theme from "theme";

export const Title = styled.p`
  font-size: 14px;
  position: absolute;
  left: 25%;
  top: 40%;
  ${mediaMax.md} {
    top: 20%;
    left: 0;
  }
  ${mediaMax.xs} {
    top: 15%;
  }
`;

export const Number = styled.span`
  font-size: 10px;
  margin-right: 10px;
`;
