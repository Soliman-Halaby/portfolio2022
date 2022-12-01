/**
 Cursor Recoil
**/
import { atom } from "recoil";

export const CURSOR_KEY = "CursorManager";
export const CURSOR_HOVER = "CursorHover";
export const cursorState = atom({
  key: CURSOR_KEY,
  default: "simple",
});

export const cursorHover = atom({
  key: CURSOR_HOVER,
  default: "",
});
