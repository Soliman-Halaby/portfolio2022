import styled from "@emotion/styled";
import { mediaMax, title } from "styles/mixins";
import theme from "theme";

export const Title = styled.p`
  font-size: 14px;
  position: absolute;
  left: 25%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  top: 40%;
  white-space: break-spaces;
  margin-left: ${({ theme }) => theme.margin.medium};
  margin-top: 48px;
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
