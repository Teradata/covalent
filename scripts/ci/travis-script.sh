#!/bin/bash

# Script that runs in every Travis CI container.
# Responsible for testing the project in different Travis jobs of the current build stage.

# The script should immediately exit if any command in the script fails.
set -e

# Go to project directory
cd $(dirname $0)/../..

if [[ -z "$TRAVIS" ]]; then
  echo "This script can only run inside of Travis build jobs."
  exit 1
fi

echo ""
echo "Building sources and running tests. Running mode: ${MODE}"
echo ""

# Get commit diff
if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  fileDiff=$(git diff --name-only $TRAVIS_COMMIT_RANGE)
else
  fileDiff=$(git diff --name-only $TRAVIS_BRANCH...HEAD)
fi

if [ "${MODE}" = "commitlint" ]; then
    npm run commitlint
elif [ "${MODE}" = "prettier" ]; then
    npm run prettier:check
elif [ "${MODE}" = "lint" ]; then
  npm run lint
elif [ "${MODE}" = "aot" ]; then
  npm run build:docs
elif [ "${MODE}" = "release" ]; then
  npm run build:lib
elif [ "${MODE}" = "unit-test" ]; then
  npm run test
elif [ "${MODE}" = "audit" ]; then
  npm audit --production --audit-level=high
elif [ "${MODE}" = "a11y" ]; then
  npm run a11y
fi

# Upload coverage results if those are present.
if [ -f coverage/lcov.info ]; then
  npm run coveralls
fi
