import styled from "@emotion/styled";

import theme from "theme";

export const App = styled.div`
  width: 100%;
  // background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => {
    theme.colors.grey2;
  }};
  flex-direction: column;
`;

export const Wrapper = styled.div``;
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => {
    theme.colors.grey2;
  }};
`;
