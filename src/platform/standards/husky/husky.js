module.exports = {
  hooks: {
    'pre-commit': "pretty-quick --staged --no-restage --bail --pattern '**/*.*(ts|js|json|css|scss|yml|html)'",
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
