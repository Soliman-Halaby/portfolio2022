import styled from "@emotion/styled";

export const SceneContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    canvas{
        background: transparent !important;
        z-index: 999;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const Title = styled.h2`
    position: absolute;
    width: 100%;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.serif};
    font-weight: 400;
    font-size: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`