import React, { useState, useRef } from "react";

import { ButtonStyle } from "./style.js";

const CircularButton = ({ label = "" }) => {
  return <ButtonStyle>{label}</ButtonStyle>;
};

export default CircularButton;
