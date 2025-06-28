


export default function(eleventyConfig) {
  console.log("✅ Eleventy config loaded!");

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/admin/");
  eleventyConfig.addPassthroughCopy("src/admin/uploads");
  eleventyConfig.addPassthroughCopy("src/google-fonts.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",         // ✅ Force .html/.njk to use Nunjucks
    dataTemplateEngine: "njk"
  };
}