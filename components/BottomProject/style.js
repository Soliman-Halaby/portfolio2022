import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, TitleSection, Paragraph } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  /* margin-top: 17rem; */
  min-height: 75vh;
  /* display: flex;
  align-items: center; */
  padding-top: 15rem;
  padding-bottom: 10rem;

  ${maxMedia.xs} {
    margin-top: 4rem;
  }

  ${maxMedia.small} {
    min-height: 60vh;
    padding-top: 8rem;
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  ${maxMedia.xs} {
    gap: 2rem;
  }
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
  width: clamp(300px, 100%, 700px);
  margin-top: 3rem;
  flex-wrap: wrap;
`;
