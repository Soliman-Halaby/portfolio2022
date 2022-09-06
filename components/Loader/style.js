import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
    width: 100%;
    gap: 0rem;
    height: 100vh;      
    z-index: 999;
    background: ${({theme}) => theme.colors.grey2};
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;

    @keyframes cursorAnim {
        0% {
            transform: rotate(0deg):
        }
        50%{
            // transform: rotate(90deg);
        }
        100%{
            transform: rotate(180deg);
        }
    }
    
    svg{
        animation: cursorAnim 2s infinite;

    }
`

export const LoaderNumber = styled.span`
    ${TitleSection()}
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${({theme}) => theme.colors.grey2};
    transform: translate(-50%, -50%);
    mix-blend-mode: exclusion;
    margin:0;
`