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
  useEffect(() => {
    // 다국어 적용
    const appStarted = async () => {
      await i18n.changeLanguage();
    };
    appStarted();
  }, []);

  const getPathProduct = new Path("/product/:slug");
  const getPathCart = new Path("/cart");

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Translation />
        <Routes>
          <Route path="/" element={<Home />} />
          ? (
          <Route path={getPathProduct.path} element={<Product />} />
          <Route path={getPathCart.path} element={<Cart />} /> : (
          <Route path="/*" element={<Developing />} />
          ))
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
