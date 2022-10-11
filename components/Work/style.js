import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 0px 20px;
  display: flex;
  gap: 0rem;
  margin: 10rem 0;
  padding-left: 28px;
  position: relative;
  height: 100%;
  margin-bottom: 20rem;
  align-items: flex-end;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${TitleSection()}
  font-size: clamp(42px, 11.15vw, 168px);
  margin-bottom: 5rem;
  position: absolute;
  bottom: 0;
`;

export const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  row-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(106px, 1fr));
  grid-template-rows: 1fr 1fr;
`;