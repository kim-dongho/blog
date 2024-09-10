import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import { useRecoilValue } from "recoil";
import { themeState } from "./atom";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const isDarkMode = useRecoilValue(themeState);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes></Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
