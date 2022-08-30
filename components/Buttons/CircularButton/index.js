import React, { useState, useRef } from "react";

import Link from "next/link.js";
import { ButtonStyle } from "./style.js";

const CircularButton = ({ label, to }) => {
  return { to } ? (
    <Link href={to}>
      <ButtonStyle>{label}</ButtonStyle>
    </Link>
  ) : (
    <ButtonStyle>{label}</ButtonStyle>
  );
};

export default CircularButton;
