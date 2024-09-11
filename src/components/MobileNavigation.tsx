import { useRecoilValue } from "recoil";
import { themeState } from "../atom";
import { useState } from "react";
import { css } from "@emotion/react";
import NavList from "./NavList";
import { icons } from "../util/asset";

const MobileNavigation = () => {
  const isDark = useRecoilValue(themeState);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {!isOpen && (
        <img
          src={isDark ? icons.hamburgerDark : icons.hamburgerLight}
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <div css={slideWrapper(isOpen)}>
        <div css={slideHeader}>
          <div>
            <img src={icons.leaf} />
            <p>DH's Blog</p>
          </div>
          <img
            src={icons.cancel}
            alt="cancel"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const slideWrapper = (isOpen: boolean) => css`
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transform: ${isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s ease-in-out;
  background-color: white;
  color: black;
  z-index: 10;
  ul li {
    display: flex;
    width: 100%;
    font-size: 22px;
    padding: 20px;
    align-items: center;
    gap: 20px;
  }
`;

const slideHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  > div {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 26px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 32px;
    height: 32px;
  }
`;
export default MobileNavigation;
