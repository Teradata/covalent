// @ts-check
const { covalentHooks, generateHuskyConfig } = require('./src/platform/coding-standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(covalentHooks());
module.exports = huskyHooks;
