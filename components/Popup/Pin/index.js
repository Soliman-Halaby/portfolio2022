import React, { useState, useRef } from "react";

import { SuccessMessage } from "./style.js";

const Pin = ({ label = "", clipboard = false }) => {
  return <SuccessMessage colored={clipboard}>{label}</SuccessMessage>;
};

export default Pin;
