export default function(eleventyConfig) {

  console.log("✅✅✅ CONFIG IS LOADING! Output should be 'public' ✅✅✅");
  // Copy static files - use full paths relative to project root
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "src/google-fonts.css": "google-fonts.css" });
  eleventyConfig.addPassthroughCopy({ "src/main.js": "main.js" });
  
  // Copy directories
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // Collections
  eleventyConfig.addCollection("featured", function(collectionApi) {
    return collectionApi.getFilteredByTag("featured");
  });

  eleventyConfig.addCollection("project", function(collectionApi) {
    return collectionApi.getFilteredByTag("project");
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}

