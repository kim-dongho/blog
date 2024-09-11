import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { themeState } from "../atom";
import { icons } from "../util/asset";

const linkList = [
  {
    id: "github",
    dark: icons.githubDark,
    light: icons.githubLight,
    link: "https://github.com/kim-dongho",
  },
];

const Footer = () => {
  const isDark = useRecoilValue(themeState);

  return (
    <div css={footerContainer}>
      <div css={iconWrapper}>
        {linkList.map((item) => {
          const { id, dark, light, link } = item;
          return (
            <img
              key={id}
              alt={id}
              src={isDark ? dark : light}
              onClick={() => window.open(link, "_blank")}
            />
          );
        })}
      </div>
      <p>© 2024 DH's Blog. All rights reserved.</p>
    </div>
  );
};

const footerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 20px;
`;

const iconWrapper = css`
  img {
    width: 24px;
    height: 24px;
  }
`;

export default Footer;
