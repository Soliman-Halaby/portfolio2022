/**
  Loader Recoil
**/
import { atom } from "recoil";

export const LOADER_KEY = "LoaderManager";
export const LOADER_ANIM = "LoaderAnim";
export const loadingState = atom({
  key: "loadingState",
  default: true,
});

export const loaderAnim = atom({
  key: "loaderAnim",
  default: false,
});
