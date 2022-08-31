import { Route, Routes } from "react-router-dom";
import Developing from "../Developing";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";

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
        <Route path={getPathProduct.path} element={<Product />} />
        <Route path={getPathCart.path} element={<Cart />} />) :
        {/* TODO: 경로 이탈 페이지, 개발 페이지 분리하기 */}
        ( <Route path="*" element={<Developing />} /> )
      </Routes>
    </>
  );
};

export default Router;
