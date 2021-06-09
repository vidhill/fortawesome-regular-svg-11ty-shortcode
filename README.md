# @vidhill/fortawesome-brands-11ty-shortcode

Allows fortawesome brand icons to be embedded as inline svg into [11ty](https://www.11ty.dev/) templates.

See brand icon names here: [font-awesome-5-brands](https://fortawesome.com/sets/font-awesome-5-brands)

```bash
$ npm install @vidhill/fortawesome-brands-11ty-shortcode --save
```

## Setup

**Option A:** Import as a plugin, shortcodes names are fixed, if you want to name the shortcodes yourself see Option B

```javascript
const {
    fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(fortawesomeBrandsPlugin);

    return {
        // normal eleventy config
    };
};
```

**Option B:** import the render function so that a custom shortcode name can be defined

```javascript
const {
    fortawesomeBrandsShortcode,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode('fortawesomeBrand', fortawesomeBrandsShortcode);

    return {
        // normal eleventy config
    };
};
```

## Usage

### Input

```javascript
{% fortawesomeBrand 'github' %}
```

#### Output

```html
<svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="github"
    class="svg-inline--fa fa-github fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
>
    <path fill="currentColor" d="M165.9 397.4c0....4-2.3-4-3.3-5.6-2z"></path>
</svg>
```

### Input

Specifying a css class to be added to the `svg` element

```javascript
{% fortawesomeBrand 'github', "social-icon" %}
```

#### Output

```html
<svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="github"
    class="svg-inline--fa fa-github fa-w-16 social-icon"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
>
    <path fill="currentColor" d="M165.9 397.4c0....4-2.3-4-3.3-5.6-2z"></path>
</svg>
```

Multiple css class to be added to they svg by passing a comma separated string:

```javascript
{% fortawesomeBrand 'github', "social-icon,unicorn-icon" %}
```

## Development

-   Build: `npm run build`
-   Watch build: `npm run dev`
-   Run tests: `npm run test`
-   Watch tests: `npm run test:watch`
