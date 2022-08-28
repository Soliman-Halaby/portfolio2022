import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaMax, title } from "styles/mixins";

export const Wrapper = styled.div`
    width: 100%;
    // background: pink;
    height: 50px;
    margin-top: 300px;
`

export const Title = styled.h3`
    font-size: clamp(42px, 11vw, 220px);
    font-family: ${({ theme }) => theme.fonts.serif};
    color: ${({theme}) => theme.colors.grey1};
    font-weight: 400;
    text-align: center;
    letter-spacing: clamp(1px, 0.25vw, 3px);
    
    ${mediaMax.xs}{
        font-size: 42px;
        letter-spacing: 1px;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
`



export const Image = styled.img`
    
`