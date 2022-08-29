import React, { useState, useRef } from "react";

import { SuccessMessage } from "./style.js";

const Pin = ({ label, colored = false, className, action}) => {
  return <SuccessMessage onClick={action} className={ className }colored={colored}>{label}</SuccessMessage>;
};

export default Pin;
