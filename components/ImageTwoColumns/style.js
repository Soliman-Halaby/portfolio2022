import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0rem;
  overflow: hidden;
  ${maxMedia.xs} {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 0rem 1rem;

  ${maxMedia.small} {
    padding: 0 2rem;
    margin: 1rem 0;
  }

  &:nth-of-type(1) {
    padding-left: 2rem;
  }

  &:nth-of-type(2) {
    padding-right: 2rem;
    /* transform: translateY(50px) !important; */
  }

  ${maxMedia.xs} {
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 100%;
  background: #e3e3e3;
  display: flex;
  justify-content: center;
  padding: 13rem 2rem;
  ${maxMedia.xs} {
    width: auto !important;
    padding: 8rem 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
