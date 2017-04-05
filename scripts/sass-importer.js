var path = require("path");

module.exports = function sassImporter(url, prev, done) {
  if (url.indexOf('~') === 0) {
    url = 'node_modules/' + url.substring(1, url.length);
    return {file: path.relative(path.dirname(prev), url)};
  }
  return {file: url};
}