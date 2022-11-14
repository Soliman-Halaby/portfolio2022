import React, { useState, useRef } from "react";

import { Wrapper, Container, Image, ImageContainer } from "./style";

const ImageTwoColumns = ({ color, src, src2 }) => {
  return (
    <Wrapper data-scroll-section>
      <ImageContainer>
        {/* <Container data-scroll data-scroll-speed="1"> */}
        <Container color={color}>
          <Image
            data-scroll
            data-scroll-speed="0.5"
            alt="Project Image"
            src={src}
          ></Image>
        </Container>
      </ImageContainer>
      <ImageContainer>
        {/* <Container data-scroll data-scroll-speed="2"> */}
        <Container color={color}>
          <Image
            data-scroll
            data-scroll-speed="0.75"
            alt="Project Image"
            src={src2}
          ></Image>
        </Container>
      </ImageContainer>
    </Wrapper>
  );
};

export default ImageTwoColumns;
