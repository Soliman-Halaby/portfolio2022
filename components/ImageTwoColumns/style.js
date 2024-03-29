import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";
import Image from "next/image";
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0rem;
  margin-bottom: 2rem;
  overflow: hidden;
  ${maxMedia.small} {
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

  ${maxMedia.small} {
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 100%;
  background: ${({ color }) => (color ? color : "#e3e3e3")};
  display: flex;
  justify-content: center;
  padding: 13rem 2rem;
  ${maxMedia.small} {
    width: auto !important;
    padding: 8rem 1rem;
  }
`;

export const ImageBlockContainer = styled.div`
  height: 40rem;
  position: relative;
  width: 100%;
`;
export const ImageBlock = styled(Image)`
  /* width: 100%; */
  max-width: 100%;
  object-fit: contain;
  max-height: 40rem;
  ${maxMedia.small} {
    width: 100%;
  }
`;
