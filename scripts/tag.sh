#!/usr/bin/env bash

# if master branch and not a pull request
if [ $TRAVIS_BRANCH == 'master' ] && [ -z $TRAVIS_PULL_REQUEST_BRANCH ]
then
  latest=$(npm info maas-schemas dist-tags.latest)
  git tag v${latest}
  git push origin v${latest}
else
  echo "Package is tagged only from master branch"
fi