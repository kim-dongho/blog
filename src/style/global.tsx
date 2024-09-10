import { css, Global, Theme, useTheme } from "@emotion/react";

const style = (theme: Theme) => css`
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-ExtraLight.otf") format("opentype");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Light.otf") format("opentype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-SemiBold.otf") format("opentype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-ExtraBold.otf") format("opentype");
    font-weight: 800;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    color: ${theme.text};
    background-color: ${theme.background};
    font-family: "Pretendard", sans-serif;
    max-width: 1200px;
    margin: ;
  }
`;

export const GlobalStyle = () => {
  const theme = useTheme();
  return <Global styles={style(theme)} />;
};
