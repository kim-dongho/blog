import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import { useRecoilValue } from "recoil";
import { themeState } from "./atom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./routes/Blog";
import Tags from "./routes/Tags";
import BlogPost from "./routes/BlogPost";

function App() {
  const isDarkMode = useRecoilValue(themeState);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/tags" element={<Tags />} />
            <Route path="/" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
