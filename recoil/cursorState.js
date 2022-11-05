/**
 * Cursor Recoil store
 */
import { atom } from "recoil";

export const CURSOR_KEY = "CursorManager";

export const cursorState = atom({
  key: CURSOR_KEY,
  default: "simple",
});
