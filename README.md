# LastStaticSiteGenerator

This tool combines two simple tools(eleventy & parcel) to replace a few hundred grunt, gulp and webpack plugins and static-site-generators. You can use and combine all of your favorite technologies to build a static website with zero configuration!

## Supported technologies

Out of the box support for HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and JavaScript Template Literals, Javascript, ReasonML, CSS, SCSS, LESS, Stylus, HTML, TypeScript, CoffeeScript, Vue, JSON, GraphQL, Rust, WebAssembly, YAML, TOML, OpenGL, Pug, WebManifest

## Why

After learning gulp, grund, webpack and many more. You deserve a tool that gives you: zero configuration, Code splitting, Hot module replacement, multicore compilation, filesystem cache, out of the box support for JS, CSS, HTML, file assets, and more - no plugins needed, Code is automatically transformed using Babel, PostCSS, and PostHTML when needed - even node_modules.

## How

Transforms a directory of templates into HTML using eleventy. Than parcel automaticaly detects all your assets in your pages and processes them. No magic. You can adjust everything in package.json's scripts section.

## Installation

1. Clone this repository:

```
git clone https://github.com/koljakutschera/laststaticsitegenerator.git
```

2. Open a terminal and run:

```
npm install
```

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

To generate a minified production-bundle open a terminal and run:

```
npm run production
```

To generate the minified production-bundle as PWA open a terminal and run:

```
npm run production:pwa
```

To just serve the production-bundle from "dist"-directory on localhost open a terminal and run:

```
npm run serve
```

## Getting started

If you are ready for coding check the "site"-directory which contains some example files. Now its time to read the very short/good eleventy and parcel documentations.

## Getting started with PWA

If you want to generate a PWA in production you can adjust the following files to your needs:

- site/\_data/metadata.json
- site/manifest.njk
- site/_assets/manifest-192.png
- site/_assets/manifest-512.png

Advanced users can use: workbox-config.js to configure how the PWA builds. For more infos see: https://developers.google.com/web/tools/workbox/

## Hosting

Generate the production-bundle and push the "dist"-directory to your server.

## Documentation

Eleventy: https://github.com/11ty/eleventy

Parcel: https://parceljs.org/

## Inspiration

There are many sites using Eleventy for example the official website of the V8 project is hosting its source at: https://github.com/v8/v8.dev/tree/master/src

For more check: https://www.11ty.io/docs/#sites-using-eleventy

## FAQ

### What are the .cache, cache_eleventy, cache_parcel directories for?

Temporary files. Just ignore them.

## Troubleshooting


### I see nothing on: http://localhost:1234/

Append your pages filename to the URL for example: index.html = http://localhost:1234/index.html

### PWA Manifest not served

Make sure your server uses: application/manifest+json MIME-Type for .webmanifest file.

### Serviceworker not loaded

The serviceworker will not load on local domains (localhost/127.0.0.1).

### Page not generated

This is because parcel does not(now) work with sub-directories(aka folders-URLs) created by eleventy. To fix this we rewrite permalinks in eleventy from: /filename/index.html to /filename.html via eleventy's global-data-file feature(see site/\_data/permalink.js). You can overwrite the default permalinks via yamlfront in a template but you have to make sure that its not rendered to a sub-directory. The following will not work for example:

```
---
permalink: subdirectory/filename.html
---
```

### Random script in head

This happens if you add inline-styles in development and is a parcel-bug. Just ignore the script it will not be present in production-bundle.


## Contribution

Pleeeease dont Pull-Request me. All the logic of the LastStaticSiteGenerator lives in package.json's scripts section. Just adjust it to your needs.
