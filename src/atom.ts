import { atom } from "recoil";
import { ListProps } from "./types/ListProps";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const themeState = atom({
  key: "theme",
  default: false,
});

export const blogListState = atom<ListProps[] | null>({
  key: "blogList",
  default: [],
});

export const filterList = atom<string[]>({
  key: "filterList",
  default: [],
});
