/**
 * scssTransform.js
 * @fileOverview A Jest transformer turning scss imports into a map of
 * their exported variable to the string literal values of those variables.
 *
 * @example
 *
 * // input (contents of .scss file)
 * $primaryColor: #0000FF;
 * $secondaryColor: #FF0000;
 * :export {
 *   primary: $primaryColor;
 *   secondary: $secondaryColor;
 * }
 *
 * // output (js object)
 * { primary: '$primaryColor', secondary: '$secondaryColor' }
 */

 const {
    getCacheKey,
    getExported,
    getLines,
    getStrippedSource,
    hasExports,
    isSupportedFile,
    makeExportsString,
    makeProcessExports,
    parseExportsToObject,
  } = require('./jest-scss-transform-helpers');
  
  module.exports = {
    process(source, filename) {
      let result;
  
      if (isSupportedFile(filename)) {
        // strip comments
        const strippedSource = getStrippedSource(source);
  
        // check if the scss file contents include an ":export {}" block
        if (hasExports(strippedSource)) {
          // a string of all exported values
          const exported = getExported(strippedSource);
  
          // create an array of each exported key-value pair
          const lines = getLines(exported);
  
          // create an object from the scss variable literals to be re-exported
          result = parseExportsToObject(lines);
        }
      }
  
      // generate the module.exports string
      const exportString = makeExportsString(result);
  
      // return the process export
      return makeProcessExports(exportString);
    },
    getCacheKey() {
      return getCacheKey();
    },
  };