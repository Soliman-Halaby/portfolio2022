import React, { useState } from "react";
// import Image from "next/image";

import { Wrapper, Title, Container, Image } from "./style.js";
const Footer = () => {
  return (
      <Wrapper>
        <Title>Soliman Al Halaby</Title>
        <Container>
            <Image src="/contact-image.png"></Image>
        </Container>
      </Wrapper>
  );
};

export default Footer;
