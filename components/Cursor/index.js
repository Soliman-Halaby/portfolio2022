import { react, useRef, useEffect, createContext } from "react";

import { useRecoilValue } from "recoil";
import { Cursor, CursorWrapper, CursorContainer } from "./style.js";
import ProjectButton from "../Buttons/ProjectButton/index.js";
import { cursorState, cursorHover } from "recoil/cursorState.js";

import Icon from "utils/Icon.js";
export default function CustomCursor(width, height, custom = false) {
  const cursorRef = useRef(null);

  const cursorWrapper = useRef(null);
  const cursorDisplay = useRecoilValue(cursorState);
  const cursorRotation = useRecoilValue(cursorHover);

  function onMouseMove(e) {
    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.style.left = `${e.clientX - 10}px`;
    cursor.style.top = `${e.clientY - 10}px`;
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("scroll", (e) => {
      if (cursorRef.current == null) return;
    });
    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorWrapper.current.classList.add("expand");
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorWrapper.current.classList.remove("expand");
      }, 500);
    });
  }, []);
  return (
    <Cursor ref={cursorRef}>
      <CursorWrapper>
        <CursorContainer
          ref={cursorWrapper}
          className={`${cursorDisplay} ${cursorRotation}`}
        >
          <Icon icon="cursor" size={16} />
        </CursorContainer>
        <CursorContainer className={cursorDisplay}>
          <ProjectButton className={cursorDisplay} label="Learn more" />
        </CursorContainer>
      </CursorWrapper>
    </Cursor>
  );
}
