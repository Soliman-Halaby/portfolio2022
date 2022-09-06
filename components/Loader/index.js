import React, { useState, useRef } from "react";

import { Wrapper, Container, LoaderNumber} from './style'

const Loader = ({
}) => {
  return (
      <Wrapper>
          <Container>
            <svg
                width={443}
                height={501}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M410.006 302.958c-30.616-11.773-132.158-35.39-172.449-47.18 37.107-11.655 146.805-41.601 175.855-56.618 62.94-31.701 5.065-130.584-53.059-87.154-29.061 21.714-108.225 110.312-132.456 135.383 6.535-48.542 45.406-147.255 45.484-192.46.123-70.319-98.223-77.187-98.364 3.177-.061 35.16 36.817 154.096 43.206 189.267-43.48-31.887-106.225-112.361-141.66-134.188-56.374-35.258-114.582 56.724-43.697 92.008 22.557 10.084 151.499 40.446 182.117 50.545-46.792 18.335-146.79 33.229-182.304 56.607-64.573 43.418-5.062 128.909 53.059 87.154 25.834-20.046 104.998-108.644 132.456-135.384-9.76 48.537-45.376 130.513-45.479 189.112-.102 58.599 98.242 67.142 98.364-3.177.106-60.273-33.598-150.742-43.211-185.918 45.09 33.564 109.467 102.321 138.441 130.834 46.676 48.635 119.434-65.088 43.697-92.008Z"
                fill="#1E1E1E"
                />
            </svg>
            <LoaderNumber>20%</LoaderNumber>
          </Container>
      </Wrapper>
  );
};

export default Loader;
