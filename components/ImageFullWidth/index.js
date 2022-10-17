import React, { useState, useRef } from "react";

import {
  Wrapper,
  Container,
  Image,
  ContainerWrapper,
  ImageContainer,
} from "./style";

const FullWidthImage = ({ src = "/cc" }) => {
  return (
    <Wrapper data-scroll-section>
      {/* <ContainerWrapper data-scroll data-scroll-speed="1.5"> */}
      <ContainerWrapper>
        <Container>
          <ImageContainer data-scroll data-scroll-speed="0.5">
            <Image src={src}></Image>
          </ImageContainer>
        </Container>
      </ContainerWrapper>
    </Wrapper>
  );
};

export default FullWidthImage;
