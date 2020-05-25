#!/usr/bin/env bash

BIN=$(npm bin)
EXIT_CODE=0

for FILE in ./eslintrc/*.yml
do
  echo
  echo "*** Testing ${FILE} for deprecated and new rules ***"

  "${BIN}/eslint-find-rules" -du "${FILE}"
  CODE=$?

  if [[ $CODE != 0 ]]
  then
    EXIT_CODE=$CODE
  fi
done

echo

if [[ $EXIT_CODE != 0 ]]
then
  echo "Failed."
  echo
fi

exit $EXIT_CODE
