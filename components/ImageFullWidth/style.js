import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, title } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 20px;
  padding-top: 0;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: hidden;
  object-position: center;
`;
export const Container = styled.div`
  background: #e3e3e3;
  /* height: 105vh; */
  display: flex;
  justify-content: center;
  padding: 5vw;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
