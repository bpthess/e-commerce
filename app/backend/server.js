import express from "express";
import path from "path";
import data from "./data.js";
// import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB에 연결하였습니다.");
  })
  .catch((err) => {
    console.log(err.message);
  });

// express 객체 생성
const app = express();

// '미들웨어 함수' : products 경로 등록
app.get("/api/products", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data.products);
});

// '미들웨어 함수' : slug 경로 등록
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  res.header("Access-Control-Allow-Origin", "*");
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "상품을 찾을 수 없습니다." });
  }
});

// '미들웨어 함수' : id 경로 등록
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id);
  res.header("Access-Control-Allow-Origin", "*");
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "상품을 찾을 수 없습니다." });
  }
});

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// 리액트 정적 파일 제공
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));

// 라우트 설정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});
