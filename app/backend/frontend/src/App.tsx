import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./pages/Product/ProductScreen";
import HomeScreen from "./pages/Home/HomeScreen";
import CartScreen from "./pages/Cart/CartScreen";
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
          <Route path="/" element={<HomeScreen />} />
          ? (
          <Route path={getPathProduct.path} element={<ProductScreen />} />
          <Route path={getPathCart.path} element={<CartScreen />} /> : (
          <Route path="/*" element={<Developing />} />
          ))
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
