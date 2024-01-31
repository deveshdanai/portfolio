
const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function(eleventyConfig){

        
        eleventyConfig.addPassthroughCopy('./src/style.css');
        eleventyConfig.addPlugin(eleventyGoogleFonts);
        eleventyConfig.addPassthroughCopy('./src/admin/');
    return{
        dir: {
            input: "src",
            output: "public"
        }
    };
    }


