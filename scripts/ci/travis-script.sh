#!/bin/bash

# Script that runs in every Travis CI container.

# The script should immediately exit if any command in the script fails.
set -e

# Go to project directory
cd $(dirname $0)/../..

if [[ -z "$TRAVIS" ]]; then
  echo "This script can only run inside of Travis build jobs."
  exit 1
fi

./scripts/ci/travis-testing.sh
