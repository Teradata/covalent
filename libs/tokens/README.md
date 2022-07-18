# Covalent Style Dictionary

This example code is bare-bones to show you what this framework can do. If you have the style-dictionary module installed globally, you can `cd` into this directory and run:

```bash
style-dictionary build
```

You should see something like this output:
```
json
⚠️ build/json/variables.json

scss
✔︎ build/scss/_variables.scss

css
✔︎ build/css/variables.css

js
✔︎ build/js/variables.js
```

Good for you! You have now built your first style dictionary! Moving on, take a look at what we have built. This should have created a build directory and it should look like this:
```
├── README.md
├── config.json
├── tokens/
│   ├── color/
│       ├── base.json
│       ├── surface.json
│       ├── text.json
│       ├── palettes/
│          ├── material.json
│          ├── teradata.json
│   ├── typography/
│       ├── typography.json
├── build/
│   ├── json/
│      ├── variables.json
│   ├── scss/
│      ├── _variables.scss
│   ├── css/
│      ├── variables.scss
│   ├── js/
│      ├── variables.js
```

If you open `config.json` you will see there are 5 platforms defined: scss, android, compose, ios, and ios-swift. Each platform has a transformGroup, buildPath, and files. The buildPath and files of the platform should match up to the files what were built. The files built should look like these:

**SCSS**
```scss
// _variables.scss
$light-primary: #007373 !default;
$light-secondary: #007373 !default;
$light-error: #b11d00 !default;
$light-positive: #0a7e07 !default;
$light-caution: #ff8f00 !default;
$light-negative: #b11d00 !default;
$light-on-primary: white !default;
$light-on-secondary: white !default;
$light-on-background: rgba(0, 0, 0, 0.87) !default;
$light-on-surface: rgba(0, 0, 0, 0.87) !default;
$light-on-error: white !default;
$light-divider: rgba(0, 0, 0, 0.12) !default;
$light-background: #f5f5f5 !default;
$light-surface: white !default;
```

Pretty nifty! This shows a few things happening:
1. The build system does a deep merge of all the token JSON files defined in the `source` attribute of `config.json`. This allows you to split up the token JSON files however you want. There are 2 JSON files with `color` as the top level key, but they get merged properly.
1. The build system resolves references to other design tokens. `{size.font.medium.value}` gets resolved properly.
1. The build system handles references to token values in other files as well as you can see in `tokens/color/font.json`.

Now let's make a change and see how that affects things. Open up `tokens/color/base.json` and change `"#111111"` to `"#000000"`. After you make that change, save the file and re-run the build command `style-dictionary build`. Open up the build files and take a look.

**Huzzah!**

Now go forth and create! Take a look at all the built-in [transforms](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms) and [formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats).
