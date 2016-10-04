'use strict';
const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Simple Promiseify function that takes a Node API and return a version that supports promises.
 * We use promises instead of synchronized functions to make the process less I/O bound and
 * faster. It also simplify the code.
 */
function promiseify(fn) {
  return function() {
    const args = [].slice.call(arguments, 0);
    return new Promise((resolve, reject) => {
      fn.apply(this, args.concat([function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      }]));
    });
  };
}

const readFile = promiseify(fs.readFile);
const writeFile = promiseify(fs.writeFile);

function inlineResources(globs) {
  /**
   * For every argument, inline the templates and styles under it and write the new file.
   */
  for (let pattern of globs) {
    if (pattern.indexOf('*') < 0) {
      // Argument is a directory target, add glob patterns to include every files.
      pattern = path.join(pattern, '**', '*');
    }

    const files = glob.sync(pattern, {})
      .filter(name => /\.js$/.test(name));  // Matches only JavaScript files.

    // Generate all files content with inlined templates.
    files.forEach(filePath => {
      readFile(filePath, 'utf-8')
        .then(content => inlineTemplate(filePath, content))
        .then(content => inlineStyle(filePath, content))
        .then(content => removeModuleId(filePath, content))
        .then(content => writeFile(filePath, content))
        .catch(err => {
          console.error('An error occured: ', err);
        });
    });
  }
}

if (require.main === module) {
  inlineResources(process.argv.slice(2));
}


/**
 * Inline the templates for a source file. Simply search for instances of `templateUrl: ...` and
 * replace with `template: ...` (with the content of the file included).
 * @param filePath {string} The path of the source file.
 * @param content {string} The source file's content.
 * @return {string} The content with all templates inlined.
 */
function inlineTemplate(filePath, content) {
  return content.replace(/templateUrl:\s*'([^']+?\.html)'/g, function(m, templateUrl) {
    const templateFile = path.join(path.dirname(filePath), templateUrl);
    const templateContent = fs.readFileSync(templateFile, 'utf-8');
    const shortenedTemplate = templateContent
      .replace(/([\n\r]\s*)+/gm, ' ')
      .replace(/"/g, '\\"');
    return `template: "${shortenedTemplate}"`;
  });
}


/**
 * Inline the styles for a source file. Simply search for instances of `styleUrls: [...]` and
 * replace with `styles: [...]` (with the content of the file included).
 * @param filePath {string} The path of the source file.
 * @param content {string} The source file's content.
 * @return {string} The content with all styles inlined.
 */
function inlineStyle(filePath, content) {
  return content.replace(/styleUrls:\s*(\[[\s\S]*?\])/gm, function(m, styleUrls) {
    const urls = eval(styleUrls);
    return 'styles: ['
      + urls.map(styleUrl => {
          styleUrl = styleUrl.replace('scss', 'css'); //look for built css instead of scss
          const styleFile = path.join(path.dirname(filePath), styleUrl);
          const styleContent = fs.readFileSync(styleFile, 'utf-8');
          const shortenedStyle = styleContent
            .replace(/([\n\r]\s*)+/gm, ' ')
            .replace(/"/g, '\\"');
          return `"${shortenedStyle}"`;
        })
        .join(',\n')
      + ']';
  });
}


/**
 * Remove every mention of `moduleId: module.id`.
 * @param _ {string} The file path of the source file, currently ignored.
 * @param content {string} The source file's content.
 * @returns {string} The content with all moduleId: mentions removed.
 */
function removeModuleId(_, content) {
  return content.replace(/\s*moduleId:\s*module\.id\s*,?\s*/gm, '');
}


module.exports = inlineResources;