import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 0rem;
    ${mediaMax.xs}{
        flex-direction: column;
        gap: 2rem;
    }
`
export const Container = styled.div`
    width: 50%;
    background: #e3e3e3;
    display: flex;
    justify-content: center;
    padding: 13rem 2.5vw;
    margin: 0rem 1rem;
    ${mediaMax.xs}{
        width: auto !important;
        padding: 8rem 1rem;
    }
`

export const Image = styled.img`
    width: 100%;
`