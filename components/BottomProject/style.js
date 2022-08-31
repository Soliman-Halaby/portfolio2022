import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, TitleSection, Paragraph } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${mediaMax.xs} {
    margin-top: 52px;
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 4rem;
`;
export const Title = styled.h2`
  ${TitleSection()}

  position: relative;
  text-align: ${({ alignRight }) => (alignRight ? `right` : `initial`)};
`;

export const Image = styled.img``;

export const ProjectsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  width: clamp(300px, 100%, 850px);
  flex-wrap: wrap;
`;
