import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";
import Link from "next/link";
import { maxMedia, TitleSection, Paragraph } from "styles/mixins";
import { ButtonStyle } from "../Buttons/Button/style";
import { Container } from "../Buttons/Button/style";
export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${maxMedia.small} {
    margin-top: 52px;
  }
`;

export const HeroContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2.5rem 0;
`;

export const Title = styled.h2`
  ${TitleSection()}

  opacity: 0;
  line-height: 6.5rem;
  position: relative;
  margin: 0;
  text-align: ${({ alignRight }) => (alignRight ? `right` : `initial`)};
  // white-space: pre-line;
`;

export const MadeWithContainer = styled.div`
  /* overflow: hidden; */
`;
export const MadeWith = styled.div`
  padding: 0.3rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  /* overflow: hidden; */
  display: flex;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  max-width: 110px;
  text-transform: uppercase;

  ${maxMedia.small} {
    font-size: 1rem;
  }
`;

export const MadeWithLink = styled.a`
  cursor: none;
  /* opacity: 0; */

  color: ${({ theme }) => theme.colors.grey1};

  text-decoration: none;
  position: relative;
  cursor: none;
  padding-bottom: 3px;

  ${maxMedia.small} {
    padding-bottom: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 80%;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.grey1};
    transition: width ease-out 0.3s;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  padding-right: 12vw;
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  position: relative;
  justify-content: space-between;
  margin-bottom: 2rem;
  ${maxMedia.md} {
    flex-direction: column;
    gap: 2rem;
    padding-right: 0;
  }
`;

export const TagElementsContainer = styled.div`
  /* overflow: hidden; */
`;
export const TagContainer = styled.div`
  display: flex;
  gap: 7.5px;
  justify-content: flex-end;
  flex-direction: column;

  ${maxMedia.small} {
    justify-content: flex-start;
  }

  &:nth-of-type(1) {
    overflow: hidden;
  }
  &:nth-of-type(2) {
    ${maxMedia.small} {
      margin-top: 8rem;
    }
  }

  ${maxMedia.small} {
    gap: 1.5rem;
  }
`;

export const TagRow = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-wrap: wrap;

  ${maxMedia.small} {
    gap: 1.1rem;
    row-gap: 1.5rem;
  }
`;

export const TagSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  ${ButtonStyle} {
    display: flex;
    align-content: center;
  }

  ${Container} {
    margin-left: 12rem;
  }

  a {
    cursor: none;
  }
  ${maxMedia.small} {
    &:nth-of-type(2) {
      flex-direction: row;
      justify-content: space-between;
      row-gap: 2rem;
    }
    ${Container} {
      margin-left: 0;
    }

    gap: 1.5rem;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.grey1};
  text-transform: uppercase;
  font-weight: 300;
`;

export const ContentContainer = styled.div`
  overflow: hidden;
  position: absolute;
  /* width: 100%; */
  right: 20rem;
  ${maxMedia.small} {
    align-self: flex-start;
    position: inherit;
    right: inherit;
  }
`;
export const Content = styled.p`
  ${Paragraph()}
  font-weight: 300;

  align-self: flex-end;

  ${maxMedia.small} {
    font-size: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 90vh;
  overflow: hidden;

  opacity: 0;
  clip-path: polygon(35% 0px, 65% 0px, 65% 100%, 35% 100%);
  transition: all 0.6s ease;
  ${maxMedia.small} {
    height: 60vh;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  transform: scale(1.2);
  /* transition: transform 0.3s ease-in-out; */

  position: relative;
  ${maxMedia.small} {
    height: 60vh;
  }
`;
// export const ImageBlock = styled.img`
//   position: absolute;
//   top: 0%;
//   right: 0%;

//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   ${maxMedia.small} {
//     height: 60vh;
//   }
// `;

/* export const ImageBlock = styled.img` */
export const ImageBlock = styled(Image)`
  /* width: 100%;
  height: 100%; */
  /* position: absolute;
  top: 0%;
  right: 0%; */

  /* inset: 0; */
  /* transform: scale(1.3) !important; */
  width: 100%;
  height: 100%;
  object-fit: cover !important;
  ${maxMedia.small} {
    height: 60vh;
  }
`;
