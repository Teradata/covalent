// @ts-check
function covalentHooks() {
  return {
    'pre-commit': ["pretty-quick --staged --no-restage --bail --pattern '**/*.*(ts|js|json|css|scss|yml|html|md)'"],
    'commit-msg': ['commitlint -E HUSKY_GIT_PARAMS'],
  };
}

function generateHuskyConfig(hooks) {
  var huskyConfig = { ...hooks };
  Object.keys(huskyConfig).forEach((key) => {
    huskyConfig[key] = huskyConfig[key].join(' && ');
  });
  return { hooks: { ...huskyConfig } };
}

module.exports = {
  covalentHooks,
  generateHuskyConfig,
};
