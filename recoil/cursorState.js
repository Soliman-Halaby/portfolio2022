/**
 * Cursor Recoil store
 */
import { atom } from "recoil";

export const CURSOR_KEY = "simpleCursor";

export const cursorState = atom({
  key: CURSOR_KEY,
  default: "simple",
});
