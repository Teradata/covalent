#!/bin/bash

# Set a number of loops before timing out.
LIMIT=12

# Time to wait before re-checking
SLEEP=10

# Initialize the timeout variable
timeout=0

# Function to wait for ng serve to finish.
wait_for() {
    until curl -sf "$1"
    do
      if [ $timeout -eq $LIMIT ]; then
      echo -e "\nBuild timed out.\n"
        kill $NPM_PID
        exit 1
      fi
      echo -e "\nWaiting for $1...\n"
      sleep $SLEEP
      timeout=$((timeout + 1))
    done
    echo ""
}

# Reset in case getopts has been used previously in the shell.
OPTIND=1

# Initialize our own variables:
routes="routes.txt"
server="localhost:4200"

# Get command line args
while getopts "r:s:" opt; do
  case "$opt" in
  r)  routes=$OPTARG
    ;;
  s)  server=$OPTARG
    ;;
  esac
done

shift $((OPTIND-1))

[ "$1" = "--" ] && shift

# Run ng serve in the background and save the process ID.
npm run serve &
NPM_PID=$!

# wait for the server to return.
wait_for $server

# iterate over routes and pa11y them.
for route in $(cat ${routes});
do
  route=$(echo $route|tr -d '\n')
  ./node_modules/.bin/pa11y ${server}/${route};
done

# stop the ng server process.
kill $NPM_PID
