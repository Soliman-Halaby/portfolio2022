import React, { useState, useRef } from "react";

import { Wrapper, Container, Image } from './style'

const ImageTwoColumns = ({
    src='/cc',
    src2='/cc'
}) => {
  return (
      <Wrapper>
        <Container>
            <Image src={src}></Image>
        </Container>
        <Container>
            <Image src={src2}></Image>
        </Container>
      </Wrapper>
  );
};

export default ImageTwoColumns;
