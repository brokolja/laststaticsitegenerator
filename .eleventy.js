const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.addFilter("replaceEmptyWithIndex", function(value) {
    return !value || value === "" ? "index" : value;
  });

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
