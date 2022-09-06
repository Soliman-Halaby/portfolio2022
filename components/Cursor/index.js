import {react, useRef, useEffect} from "react";

import {Cursor} from './style.js'
export default function CustomCursor(width, height) {
  const cursorRef = useRef(null)
  useEffect(() => {
  if (cursorRef.current == null || cursorRef == null)
       return;
  document.addEventListener('mousemove', e => {
       if (cursorRef.current == null)
            return;
       cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.clientX) + "px;")
  })
  document.addEventListener('scroll', e => {
     if (cursorRef.current == null)
     return;
     cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.clientX) + "px;")
  })
  document.addEventListener('click', () => {
  if (cursorRef.current == null)
       return;
  cursorRef.current.classList.add("expand");
  setTimeout(() => {
       if (cursorRef.current == null)
            return;
       cursorRef.current.classList.remove("expand");
  }, 500)
  })
  }, [])
  return (
    <Cursor ref={cursorRef}>
      <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.283 10.714c-1.006-.382-4.342-1.145-5.665-1.527 1.218-.382 4.817-1.364 5.77-1.855 2.065-1.036.16-4.254-1.747-2.836-.953.709-3.547 3.6-4.34 4.418.211-1.582 1.482-4.8 1.482-6.273 0-2.29-3.23-2.509-3.23.11 0 1.145 1.218 5.018 1.43 6.163C6.553 7.878 4.489 5.26 3.324 4.55c-1.853-1.145-3.759 1.855-1.43 3 .742.328 4.977 1.31 5.983 1.637-1.535.6-4.818 1.09-5.982 1.854-2.118 1.419-.16 4.2 1.747 2.837.847-.655 3.44-3.546 4.34-4.418C7.666 11.04 6.5 13.714 6.5 15.623c0 1.91 3.23 2.182 3.23-.109 0-1.963-1.112-4.909-1.43-6.054 1.483 1.09 3.6 3.327 4.553 4.254 1.535 1.582 3.918-2.127 1.43-3Z"
          fill="#1E1E1E"
        />
      </svg>
    </Cursor>
  )
  }
  