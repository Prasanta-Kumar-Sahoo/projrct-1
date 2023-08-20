const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://schema.getpostman.com",
      changeOrigin: true,
    })
  );
};
