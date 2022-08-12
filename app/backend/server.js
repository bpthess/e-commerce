import express from "express";
import data from "./data.js";
// import cors from "cors";

const app = express();

app.get("/api/products", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data.products);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
