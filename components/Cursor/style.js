import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, TitleSection } from "styles/mixins";

export const Cursor = styled.div`
    width: 20px;
    height: 20px;
    z-index:99999;
    // border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    transition: all 0.15s ease;
    // mix-blend-mode: difference;

    &:after{

    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    // border: 2px solid blue;
    // border-radius: 50%;
    opacity: .5;
    top: -8px;
    left: -8px;
    }

    @keyframes cursorAnim {
        0% {
            transform: rotate(0deg):
        }
        // 50% {
        //     transform: rotate(360deg);
        // }
        100% {
            transform: rotate(360deg);
            // opacity: 0;
        }
    }

    &.expand{
        animation: cursorAnim .5s forwards;

    }
`;
