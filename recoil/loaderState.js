/**
 * Loader Recoil store
 */
import { atom } from "recoil";

export const LOADER_KEY = "LoaderManager";

export const loaderState = atom({
  key: LOADER_KEY,
  default: true,
});
