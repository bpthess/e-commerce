import express from "express";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(products);
});

// '미들웨어 함수' : slug 경로 등록
productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  res.header("Access-Control-Allow-Origin", "*");
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "상품을 찾을 수 없습니다." });
  }
});

// '미들웨어 함수' : id 경로 등록
productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.header("Access-Control-Allow-Origin", "*");
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "상품을 찾을 수 없습니다." });
  }
});

export default productRouter;
