import { css } from "@emotion/react";
import React from "react";
import { mediaQuery } from "../style/media";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div css={layout}>{children}</div>;
};

const layout = css`
  min-height: 75svh;
  padding: 0 20px;
  ${mediaQuery.mobile} {
    min-height: 70svh;
  }
`;

export default ContentLayout;
