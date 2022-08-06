import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";
// import Translation from "./i18n/Translation";
// import styled from "styled-components";

function App() {
  useEffect(() => {
    const appStarted = async () => {
      await i18n.changeLanguage();
    };
    appStarted();
  }, []);

  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <main>
          {/* Todo: 다국어 버튼 UI 변경 */}
          {/* <Translation /> */}
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
