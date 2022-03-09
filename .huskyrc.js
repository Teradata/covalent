// @ts-check
const {
  covalentHooks,
  generateHuskyConfig,
} = require('./libs/coding-standards/src/lib/husky/husky.js');
const huskyHooks = generateHuskyConfig(covalentHooks());
module.exports = huskyHooks;
