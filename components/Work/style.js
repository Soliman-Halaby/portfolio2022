import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
    /* width: 100%; */
    width: 100vw;
    padding: 0px 20px;
    // margin: 15vw 0px;
    display: flex;
    gap: 0rem;
    position: relative;
    // background: pink;
    height: 50vh;
    margin-bottom: 10rem;
    align-items: flex-end;
`

export const Container = styled.div`
    /* margin: 0px 20px; */
`

export const Title = styled.h2`

    ${TitleSection()}
    font-size: clamp(42px, 11.15vw, 168px);
    margin-bottom: 5rem;
    position: absolute;
    bottom: 0;
`


export const ContainerGrid = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    row-gap: 4rem;
    grid-template-columns: repeat(auto-fill, 106px);
    grid-template-rows: 1fr 1fr;
`
