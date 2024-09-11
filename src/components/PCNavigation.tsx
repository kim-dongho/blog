import { css } from "@emotion/react";
import NavList from "./NavList";

const PCNavigation = () => {
  return (
    <div css={navWrapper}>
      <NavList />
    </div>
  );
};

const navWrapper = css`
  ul {
    display: flex;
    gap: 20px;
    font-size: 18px;
    li {
      font-weight: 600;
    }
  }
`;

export default PCNavigation;
