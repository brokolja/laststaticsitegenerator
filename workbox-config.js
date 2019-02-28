module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{html,css,js,png,jpg,jpeg,gif,json,svg,eot,ttf,woff,woff2}"
  ],
  swDest: "dist/serviceworker.js",
  swSrc: "serviceworker-default.js"
};
