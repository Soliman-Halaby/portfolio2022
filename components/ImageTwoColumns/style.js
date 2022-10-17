import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0rem;
  overflow: hidden;
  ${mediaMax.xs} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 0rem 1.25vw;

  &:nth-of-type(2) {
    /* transform: translateY(50px) !important; */
  }
`;
export const Container = styled.div`
  width: 100%;
  background: #e3e3e3;
  display: flex;
  justify-content: center;
  padding: 13rem 2.5vw;
  ${mediaMax.xs} {
    width: auto !important;
    padding: 8rem 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
