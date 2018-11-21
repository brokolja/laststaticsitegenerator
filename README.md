# LastStaticSiteGenerator

This tool combines two simple tools(eleventy & parcel) to replace a few hundred grunt, gulp and webpack plugins and static-site-generators. Zero configuration!

## Why

Zero configuration, Zero config code splitting, Hot module replacement, multicore compilation, filesystem cache, out of the box support for JS, CSS, HTML, file assets, and more - no plugins needed, Code is automatically transformed using Babel, PostCSS, and PostHTML when needed - even node_modules.

## How

Transforms a directory of templates (of varying types: HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and JavaScript Template Literals) into HTML using eleventy. Than parcel automaticaly detects all your assets(of varying types: Javascript, ReasonML, CSS, SCSS, LESS, Stylus, HTML, TypeScript, CoffeeScript, Vue, JSON, GraphQL, Rust, WebAssembly, YAML, TOML, OpenGL, Pug, WebManifest) in your pages and processes them. All without touching a single config-file.

## Installation

1. Clone this repository:

```
git clone https://github.com/koljakutschera/laststaticsitegenerator.git
```

2. Open a terminal and run:

```
npm install
```

## Getting started

If you are ready for coding check the "site"-directory which contains some example files(a simple blog site). Feel free to delete its contents except for index.md to start from scratch. Now its time to read the eleventy and parcel documentation.

## Development

To generate, bundle and serve the site on: http://localhost:1234/index.html open a terminal and run:

```
npm run dev
```

or with https enabled:

```
npm run dev:https
```

## Production

To generate,bundle and minify the site open a terminal and run:

```
npm run production
```

## Hosting

Generate the production bundle and push the "production_bundle"-directory to your server.

## Documentation

Eleventy: https://github.com/11ty/eleventy

Parcel: https://parceljs.org/

## Inspiration

There are many sites using Eleventy for example the official website of the V8 project is hosting its source at: https://github.com/v8/v8.dev/tree/master/src

For more check: https://www.11ty.io/docs/#sites-using-eleventy

## FAQ

### What are the .cache, dev_bundle, dev_site directories for?

Temporary files. Just ignore them.

## Troubleshooting

### I see nothing on: http://localhost:1234/

Append your pages filename to the URL for example: index.html = http://localhost:1234/index.html

### Page not generated

This is because parcel does not(now) work with sub-directories(aka folders-URLs) created by eleventy. To fix this we rewrite permalinks in eleventy from: /filename/index.html to /filename.html via eleventy's global-data-file feature(see site/\_data/permalink.js). You can overwrite the default permalinks via yamlfront in a template but you have to make sure that its not rendered to a sub-directory. The following will not work for example:

```
---
permalink: subdirectory/filename.html
---
```

## Contribution

Pleeeease dont Pull-Request me. All the logic of the LastStaticSiteGenerator lives in package.json's scripts section. Just adjust it to your needs.
