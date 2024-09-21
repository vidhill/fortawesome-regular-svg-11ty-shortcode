const helpers = require('@vidhill/fortawesome-11ty-shortcode-helper');
const freeRegularIcons = require('@fortawesome/free-regular-svg-icons');

const fortawesomeFreeRegularShortcode = helpers.makeFortawesomeShortcode(
    freeRegularIcons,
    'far',
);

function fortawesomeFreeRegularPlugin(eleventyConfig) {
    eleventyConfig.addShortcode(
        'fortawesomeRegular',
        fortawesomeFreeRegularShortcode,
    );
}

module.exports = {
    fortawesomeFreeRegularShortcode,
    fortawesomeFreeRegularPlugin,
};
