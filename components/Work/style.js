import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { maxMedia, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 0px 2rem;
  display: flex;
  gap: 0rem;
  min-height: 100vh;
  /* margin: 10rem 0; */
  /* padding-left: 28px; */
  position: relative;
  height: 100%;
  /* margin-bottom: 20rem; */
  align-items: center;

  ${maxMedia.xs} {
    margin: ${({ display }) => (display === "work" ? "0" : "5rem 0")};
    padding: 0px 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.grey2};
  /* mix-blend-mode: exclusion; */
  position: relative;
  margin-top: ${({ display }) => (display === "work" ? "0" : "10rem")};
`;

export const Title = styled.h2`
  ${TitleSection()}
  font-size: 16rem;
  margin-bottom: 3rem;
  line-height: 16rem;
  opacity: 0;
  position: absolute;
  bottom: 0;
  z-index: 1;

  ${maxMedia.small} {
    font-size: 9rem;
    text-align: center;
    line-height: 100%;
    position: sticky;
    top: ${({ display }) => (display === "work" ? "45vh" : "35vh")};

    width: 100%;
  }

  .line {
    ${maxMedia.small} {
      text-align: center !important;
    }
  }
  .word {
    padding: 0;
  }
`;

export const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  row-gap: 6rem;
  grid-template-columns: repeat(auto-fill, minmax(106px, 1fr));
  grid-template-rows: 1fr 1fr;
  position: relative;
  z-index: 2;
  ${maxMedia.xs} {
    top: ${({ display }) => (display === "work" ? "-15rem" : "0")};
    grid-template-columns: repeat(4, 80px);
  }
`;
