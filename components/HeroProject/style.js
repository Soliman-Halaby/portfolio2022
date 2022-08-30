import styled from "@emotion/styled";
import { css } from "@emotion/react";

// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";

import { mediaMax, TitleSection } from "styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${mediaMax.xs}{
    margin-top: 52px;
  }

`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const Title = styled.h2`
${TitleSection()}

position: relative;
  text-align: ${({alignRight}) => (alignRight ? `right` : `initial`)};

  .hero_pin-section{
    top: 30%;
    right: 10%;
    left: inherit;
  }
`;

export const TagWrapper = styled.div`
  // width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;

`

// export const TagContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   align-items: center;
  
//   ${mediaMax.md}{
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `

// export const SubContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   align-items: center;
  
//   a{
//     margin-left: 3.5rem;
//     ${mediaMax.md}{
//       margin-left: 0;
//     }
//   }

//   &.flex-end{
//     margin-left: auto;
//     margin-right: 13vw;
//     // margin-right: clamp(42px, 11.25vw, 220px);30%;
//     ${mediaMax.md}{
//       margin-right: 3rem;
//     }
// `

export const Text = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({theme }) => theme.colors.grey1 };
  text-transform: uppercase;
  font-weight: 300;
  `
  
  export const Content = styled.p`
  font-size: 14px;
  line-height: auto;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({theme }) => theme.colors.grey1 };
  max-width: 300px;
  align-self: flex-end;
`
export const Image = styled.img``
