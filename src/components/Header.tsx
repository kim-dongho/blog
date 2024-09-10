import { useRecoilState } from "recoil";
import { themeState } from "../atom";
import { css } from "@emotion/react";

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(themeState);
  return (
    <div css={headerContainer}>
      <div>Title</div>
      <div>
        <button onClick={() => setIsDark(!isDark)}>Toggle Button</button>
      </div>
    </div>
  );
};

const headerContainer = css`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  background-color: tomato;
`;
const headerLeft = css``;

const headerRight = css``;

export default Header;
