import React, { useState, useRef } from "react";

import { TagStyle } from "./style.js";

const Tag = ({ label, rounded = false, colored = false, style}) => {
  return (
    <TagStyle borderStyle={style} colored={colored} rounded={rounded}>
      {label}
    </TagStyle>
  );
};

export default Tag;
