import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 0px 2rem;
  display: flex;
  gap: 0rem;
  margin: 10rem 0;
  /* padding-left: 28px; */
  position: relative;
  height: 100%;
  margin-bottom: 20rem;
  align-items: flex-end;

  ${maxMedia.xs} {
    margin: 5rem 0;
    padding: 0px 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${TitleSection()}
  font-size: 16rem;
  margin-bottom: 5rem;
  line-height: 16rem;
  opacity: 0;
  position: absolute;
  bottom: 0;

  ${maxMedia.small} {
    font-size: 9rem;
    text-align: center;
    line-height: 100%;
    position: sticky;
    top: 35vh;
    width: 100%;
  }

  .word {
    padding: 0;
  }
`;

export const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  row-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(106px, 1fr));
  grid-template-rows: 1fr 1fr;
  ${maxMedia.xs} {
    grid-template-columns: repeat(4, 80px);
  }
`;
