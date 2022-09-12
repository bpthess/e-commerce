import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

// 환경변수 설정
dotenv.config();

// 몽고DB 연동
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use(cors());
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
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
