#!/bin/bash

# Script that runs in the testing build stage of Travis and is responsible for testing
# the project in different Travis jobs of the current build stage.

# The script should immediately exit if any command in the script fails.
set -e

echo ""
echo "Building sources and running tests. Running mode: ${MODE}"
echo ""

# Go to project dir
cd $(dirname $0)/../..

# Get commit diff
if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  fileDiff=$(git diff --name-only $TRAVIS_COMMIT_RANGE)
else
  fileDiff=$(git diff --name-only $TRAVIS_BRANCH...HEAD)
fi

# Check if tests can be skipped
if [[ ${fileDiff} =~ ^(.*\.md\s*)*$ ]]; then
  echo "Skipping tests since only markdown files changed."
  exit 0
fi

if "${MODE}" = lint; then
  npm run lint
elif "${MODE}" = aot; then
  npm run build:docs
elif "${MODE}" = release; then
  npm run build:release
elif "${MODE}" = unit; then
  npm run test
fi

# Upload coverage results if those are present.
if [ -f coverage/lcov.info ]; then
  npm run coveralls
fi
