import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
    position: absolute;
    top: ${({top}) => top};
    width: auto;
    left: ${({left}) => left};
    z-index: 999;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    .learn-more-cta{
        position: absolute;
        background: ${({theme}) => theme.colors.lime};
        border-style: dashed;
        pointer-events: none;
        left: -100%;
        width: 120%;
    }
`

export const ProjectContainer = styled.div`
    // max-width: 106px;
    position: relative;
`
export const Container = styled.div`
    width: 100%;
    margin: 0px 20px;
`

export const Image = styled.img`
    width: 100%;
    max-height: 154px;
    max-width: 106px;
    object-fit: cover;
`

export const RowWrapper = styled.div`
    display: flex;
    max-width: 106px;
    margin-top: .75rem;
    gap: .5rem;
`

export const Number = styled.span`
    font-size: 12px;
    font-weight: 400;
    font-family: ${({theme}) => theme.fonts.sansSerif}
    `
    
    export const Title = styled.h3`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: ${({theme}) => theme.fonts.sansSerif}

`