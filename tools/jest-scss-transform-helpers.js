/**
 * helpers.js
 * @fileOverview Utility functions used by jest-scss-transform.
 */

 const fs = require('fs');
 const crypto = require('crypto');
 // eslint-disable-next-line import/no-extraneous-dependencies
 const jest = require('jest');
 
 const exportStartRegex = /\n:export.{\n*/;
 const exportEndRegex = /\n*}/;
 const commentsMatcher = /(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm;
 const endOfLineMatcher = /;/g;
 const scssFileExtMatcher = /.scss$/;
 const sepStr = ':';
 const emptyStr = '';
 
 module.exports.getExported = (str) => str.split(exportStartRegex)[1].split(exportEndRegex)[0];
 module.exports.getStrippedSource = (str) => str.replace(commentsMatcher, emptyStr).trim();
 module.exports.hasExports = (str) => exportStartRegex.test(str);
 module.exports.isSupportedFile = (filename) => scssFileExtMatcher.test(filename);
 module.exports.makeExportsString = (obj = {}) => `module.exports = ${JSON.stringify(obj)};`;
 
 module.exports.getLines = (str) => (
   str
     .split(endOfLineMatcher)
     .map((line) => line.trim())
     .filter((line) => !!line.length)
 );
 
 module.exports.parseExportsToObject = (lines) => (
   lines.reduce((obj, line) => {
     const [name, value] = line.split(sepStr);
     return {
       ...obj,
       [name.trim()]: value.trim().replace(endOfLineMatcher, emptyStr),
     };
   }, {})
 );
 
 module.exports.getCacheKey = () => (
   crypto
     .createHash('md5')
     .update(fs.readFileSync(__filename))
     .digest('hex')
 );
 
 module.exports.makeProcessExports = (exportString) => {
   // jest.getVersion() returns semantic version, like X.Y.Z
   // We are only interested in the major version (the "X") in this case.
   const [major] = jest.getVersion().split('.');
   const majorInt = parseInt(major, 10);
 
   if (majorInt < 27) {
     // For jest versions 26.x.x and bellow, we are fine with just returning
     // the exports as a string
     return exportString;
   }
 
   // For jest version 27.x.x and above, we want to return an object with a
   // "code" property, which contains an export string (see here: https://jestjs.io/docs/code-transformation)
   return { code: exportString };
 };