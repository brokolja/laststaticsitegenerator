var i18n = require("i18n");
i18n.configure({
  defaultLocale: "en",
  locales: process.env.ELEVENTY_LOCALES
    ? process.env.ELEVENTY_LOCALES.replace(/\)/gi, "")
        .replace(/\(/gi, "")
        .split(" ")
    : process.env.ELEVENTY_LOCALE
    ? [process.env.ELEVENTY_LOCALE]
    : ["en"],
  directory: "./locales"
});
if (process.env.ELEVENTY_LOCALE) {
  i18n.setLocale(process.env.ELEVENTY_LOCALE);
}
module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("urlFix", function(value) {
    value = !value || value === "" || value === "/" ? "index" : value;
    return value.indexOf(".html") < 0 ? value + ".html" : value;
  });
  eleventyConfig.addFilter("i18n", function(key) {
    return i18n.__(key + "") || key;
  });
};
