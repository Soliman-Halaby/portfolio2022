/**
  Loader Recoil
**/
import { atom } from "recoil";

export const LOADER_KEY = "LoaderManager";
export const LOADER_ANIM = "LoaderAnim";
export const loaderState = atom({
  key: LOADER_KEY,
  default: true,
});

export const loaderAnim = atom({
  key: LOADER_ANIM,
  default: false,
});
