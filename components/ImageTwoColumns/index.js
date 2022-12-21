import React, { useState, useRef } from "react";

import {
  Wrapper,
  Container,
  ImageBlockContainer,
  ImageBlock,
  ImageContainer,
} from "./style";

const ImageTwoColumns = ({ color, src, src2 }) => {
  return (
    <Wrapper data-scroll-section>
      <ImageContainer>
        {/* <Container data-scroll data-scroll-speed="1"> */}
        <Container color={color}>
          <ImageBlockContainer>
            <ImageBlock
              data-scroll
              layout="fill"
              data-scroll-speed="0.75"
              placeholder="blur"
              blurDataURL="https://solimanalhalaby.fr/blurImage.png"
              alt="Project Image"
              src={src}
            ></ImageBlock>
          </ImageBlockContainer>
        </Container>
      </ImageContainer>
      <ImageContainer>
        {/* <Container data-scroll data-scroll-speed="2"> */}
        <Container color={color}>
          <ImageBlockContainer>
            <ImageBlock
              data-scroll
              placeholder="blur"
              blurDataURL="https://solimanalhalaby.fr/blurImage.png"
              layout="fill"
              data-scroll-speed="0.75"
              alt="Project Image"
              src={src2}
            ></ImageBlock>
          </ImageBlockContainer>
        </Container>
      </ImageContainer>
    </Wrapper>
  );
};

export default ImageTwoColumns;
