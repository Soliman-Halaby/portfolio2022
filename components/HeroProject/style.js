import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
// import {Title as TitleSection} from "@/components/Popup/SectionTitle/style";
import Link from "next/link";
import { maxMedia, TitleSection, Paragraph } from "styles/mixins";
import { ButtonStyle } from "../Buttons/Button/style";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.margin.medium};
  margin-top: 150px;

  ${maxMedia.small} {
    margin-top: 52px;
  }
`;

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.margin.medium};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  ${TitleSection()}

  opacity: 0;
  position: relative;
  text-align: ${({ alignRight }) => (alignRight ? `right` : `initial`)};
  // white-space: pre-line;
`;

export const MadeWith = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  max-width: 100px;
  text-transform: uppercase;

  ${maxMedia.small} {
    font-size: 1rem;
  }
`;

export const MadeWithLink = styled.a`
  cursor: none;
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
  overflow: hidden;
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
`;

export const TagRow = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
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
    ${ButtonStyle} {
      margin-left: 0;
    }
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
  right: 10rem;
  ${maxMedia.small} {
    align-self: flex-start;
    position: inherit;
    right: inherit;
  }
`;
export const Content = styled.p`
  ${Paragraph()}

  align-self: flex-end;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 90vh;
  overflow: hidden;

  ${maxMedia.small} {
    height: 60vh;
  }
`;
export const ImageBlock = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;

  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${maxMedia.small} {
    height: 60vh;
  }
`;

// export const ImageBlock = styled(Image)`
//   position: absolute;
//   top: 0%;
//   right: 0%;

//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover !important;
//   ${maxMedia.small} {
//     height: 60vh;
//   }
// `;
