import React, { useState, useRef } from "react";

import { SuccessMessage } from "./style.js";

const Pin = ({ label = "" }) => {
  return <SuccessMessage>{label}</SuccessMessage>;
};

export default Pin;
