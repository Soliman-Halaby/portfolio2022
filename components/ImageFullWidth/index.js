import React, { useState, useRef } from "react";

import {
  Wrapper,
  Container,
  Image,
  ContainerWrapper,
  ImageContainer,
} from "./style";

const FullWidthImage = ({ color, src = "/cc" }) => {
  return (
    <Wrapper data-scroll-section>
      {/* <ContainerWrapper data-scroll data-scroll-speed="1.5"> */}
      <ContainerWrapper>
        <Container color={color}>
          <ImageContainer data-scroll data-scroll-speed="0.5">
            <Image alt="Fullwith image" src={src}></Image>
          </ImageContainer>
        </Container>
      </ContainerWrapper>
    </Wrapper>
  );
};

export default FullWidthImage;
