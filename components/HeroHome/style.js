import styled from "@emotion/styled";
import { css } from "@emotion/react";

import TitleSection from "@/components/SectionTitle/style";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const Title = styled.h2`
  font-size: 72px;
  line-height: 70px;
  display: inline-block;
  letter-spacing: -2;
  text-align: ${(props) => (props.alignRight ? `right` : `initial`)};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 400;
`;
