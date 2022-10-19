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