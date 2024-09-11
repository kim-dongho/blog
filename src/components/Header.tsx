import { useRecoilState } from "recoil";
import { themeState } from "../atom";
import { css } from "@emotion/react";
import Navigation from "./Navigation";
import { icons } from "../util/asset";

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(themeState);

  return (
    <div css={headerContainer}>
      <div css={headerLeft}>
        <img src={icons.leaf} />
        <h2>DH's Blog</h2>
      </div>
      <div css={headerRight}>
        <Navigation />
        <img
          src={isDark ? icons.sun : icons.moon}
          onClick={() => setIsDark(!isDark)}
          alt={"theme"}
        />
      </div>
    </div>
  );
};

const headerContainer = css`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  font-size: 26px;
`;

const headerLeft = css`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 32px;
    height: 32px;
  }
  h2 {
    font-weight: 800;
  }
`;

const headerRight = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default Header;
