import React, { useState, useRef } from "react";

import { Wrapper, Container, Image } from './style'

const FullWidthImage = ({
    src='/cc'
}) => {
  return (
      <Wrapper>
        <Container>
            <Image src={src}></Image>
        </Container>
      </Wrapper>
  );
};

export default FullWidthImage;
