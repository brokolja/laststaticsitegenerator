# LastStaticSiteGenerator

After grunt, gulp and webpack i finally found a solution that beats all of them. The LastStaticSiteGenerator combines the best tools for the job to simplify your frontend-developer-live. Zero configuration! Hot-reloading everything!

## Why

Zero configuration, Zero config code splitting, Hot module replacement, multicore compilation, filesystem cache, out of the box support for JS, CSS, HTML, file assets, and more - no plugins needed, Code is automatically transformed using Babel, PostCSS, and PostHTML when needed - even node_modules.

## How

Transforms a directory of templates (of varying types: HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and JavaScript Template Literals) into HTML using eleventy. Than parcel automaticaly detects all your assets(of varying types: Javascript, ReasonML, CSS, SCSS, LESS, Stylus, HTML, TypeScript, CoffeeScript, Vue, JSON, GraphQL, Rust, WebAssembly, YAML, TOML, OpenGL, Pug, WebManifest) in your pages and processes them. All without touching a single config-file.

## Installation

1. Clone this repository:

````
git clone 
````

2. Open a terminal and run:

````
npm install
````

## Getting started

First you should read the eleventy and parcel documentation. Both are realy short and i promise 
its worth it :P If you are ready for coding check the "site"-directory which contains some example files. Feel free to delete its example contents to start from scratch.

## Documentation

Eleventy: https://github.com/11ty/eleventy

Parcel: https://parceljs.org/

## Development

To generate, bundle and serve the site on: http://localhost:1234/index.html open a terminal and run:

````
npm run dev
````

or with https enabled:

````
npm run dev:https
````

## Production

To generate,bundle and minify the site open a terminal and run:

````
npm run production
````

## Hosting

Generate the production bundle and push the "production_bundle"-directory to your server.

## FAQ

### What are the .cache, dev_bundle, dev_site directories for?

Temporary files. Just ignore them.

## Trouble

### My new subpage is not generated

This is because parcel does not(now) work with subdirectories created by eleventy. To fix it just add a permalink to all subpages yamlfront for example:

````
---
title: About
permalink: /{{ title | slug }}.html
---
````

will generate: about.html

### I see nothing on: http://localhost:1234/

This is a parcel-bug. To fix it just append your pages filename for example: index.html = http://localhost:1234/index.html

## Contribution

Pleeeease dont Pull-Request me. All the logic of the LastStaticSiteGenerator lives in package.json's scripts section. Just adjust it to your needs.