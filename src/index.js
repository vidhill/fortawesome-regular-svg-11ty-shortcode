const helpers = require('@vidhill/fortawesome-11ty-shortcode-helper');
const brandIcons = require('@fortawesome/free-brands-svg-icons');

const fortawesomeBrandsShortcode = helpers.makeFortawesomeShortcode(
    brandIcons,
    'fab'
);

function fortawesomeBrandsPlugin(eleventyConfig) {
    eleventyConfig.addShortcode('fortawesomeBrand', fortawesomeBrandsShortcode);
}

module.exports = {
    fortawesomeBrandsShortcode,
    fortawesomeBrandsPlugin,
};
