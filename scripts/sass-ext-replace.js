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

function sassExtReplace(globs) {
  /**
   * For every argument, replace .scss for .css in their content (specifically in 'styleUrls: []').
   */
  for (let pattern of globs) {
    if (pattern.indexOf('*') < 0) {
      // Argument is a directory target, add glob patterns to include every files.
      pattern = path.join(pattern, '**', '*');
    }

    const files = glob.sync(pattern, {})
      .filter(name => /\.ts$/.test(name));  // Matches only TypeScript files.

    // Replace `.scss` with `.css` for aot build
    files.forEach(filePath => {
      readFile(filePath, 'utf-8')
        .then(content => {
          return content.replace(/styleUrls:\s*(\[[\s\S]*?\])/gm, function(m, styleUrls) {
            const urls = eval(styleUrls);
            return 'styleUrls: [\''
              + urls.map(styleUrl => {
                  return styleUrl.replace('.scss', '.css'); //look for built css instead of scss
                })
                .join('\',\n')
              + '\']';
          });
        })
        .then(content => writeFile(filePath, content))
        .catch(err => {
          console.error('An error occured: ', err);
        });
    });
  }
}

if (require.main === module) {
  sassExtReplace(process.argv.slice(2));
}

module.exports = sassExtReplace;