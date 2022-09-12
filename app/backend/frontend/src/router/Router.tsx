import { Route, Routes } from "react-router-dom";
import Developing from "../Developing";
import Home from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import SignPage from "../pages/SignPage";

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

const Router = () => {
  const getPathProduct = new Path("/product/:slug");
  const getPathCart = new Path("/cart");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> ? (
        <Route path={getPathProduct.path} element={<ProductPage />} />
        <Route path={getPathCart.path} element={<CartPage />} />
        <Route path="/signin" element={<SignPage />} />) :
        {/* TODO: 경로 이탈 페이지, 개발 페이지 분리하기 */}
        ( <Route path="*" element={<Developing />} /> )
      </Routes>
    </>
  );
};

export default Router;
