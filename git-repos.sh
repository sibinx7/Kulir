#!/bin/bash

BRANCH=$(git branch --show-current)

if [ -z "$BRANCH" ]; then
  echo "No current branch."
  exit 1
fi

echo "Pushing $BRANCH to GitHub..."
git push origin "$BRANCH" || exit 1

echo "Pushing $BRANCH to Bitbucket..."
git push production "$BRANCH" || exit 1

echo "Successfully pushed to both repositories."