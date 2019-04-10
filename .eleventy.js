module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("urlFix", function(value) {
    value = !value || value === "" || value === "/" ? "index" : value;
    return value.indexOf(".html") < 0 ? value + ".html" : value;
  });
};
