import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import i18n from "./i18n";
import Translation from "./i18n/Translation";
import Header from "./components/Header";
import Developing from "./Developing";

interface Inherit {
  path: string;
}

// 경로 캡슐화, 은닉화
class Path implements Inherit {
  constructor(private _path: string) {}
  get path() {
    return this._path;
  }
}

function App() {
  const getPathProduct = new Path("/product/:slug");
  const getPathCart = new Path("/cart");

  useEffect(() => {
    // 다국어 적용
    const appStarted = async () => {
      await i18n.changeLanguage();
    };
    appStarted();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Translation />
        <Routes>
          <Route path="/e-commerce" element={<Home />} /> ? (
          <Route path={getPathProduct.path} element={<Product />} />
          <Route path={getPathCart.path} element={<Cart />} />) :
          {/* TODO: 경로 이탈 페이지, 개발 페이지 분리하기 */}
          ( <Route path="*" element={<Developing />} /> )
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
