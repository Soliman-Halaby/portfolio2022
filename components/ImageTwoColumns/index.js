import React, { useState, useRef } from "react";

import { Wrapper, Container, Image } from './style'

const ImageTwoColumns = ({
    src,
    src2
}) => {
  return (
      <Wrapper>
        <Container>
            <Image alt='Project Image' src={src}></Image>
        </Container>
        <Container>
            <Image alt='Project Image' src={src2}></Image>
        </Container>
      </Wrapper>
  );
};

export default ImageTwoColumns;
