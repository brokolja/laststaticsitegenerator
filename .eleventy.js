const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // Do not delete we need this in: site/_data/permalink.js
  eleventyConfig.addFilter("replaceEmptyWithIndex", function(value) {
    return !value || value === "" ? "index" : value;
  });
  // The following filters are just examples for the simple-blog-example
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('dd LLLL yyyy');
  });
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
  });
  // You can return your Config object (optional).
  return eleventyConfig;
};
