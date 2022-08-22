// const proxy = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(proxy("/api/*", { target: "http://localhost:8000/", secure: false }));
// };
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // ("Access-Control-Allow-Origin", "*"),
    createProxyMiddleware("/api/*", {
      target: "http://localhost:8000/",
      secure: false,
      changeOrigin: true,
    })
  );
};
