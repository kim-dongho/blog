import { css } from "@emotion/react";

export const textEllipsis = (lineCnt: number) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${lineCnt}; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
