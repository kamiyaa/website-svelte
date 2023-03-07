#!/bin/sh

date
echo '=========='

CSS_DIR=../src
SASS_DIR=.

CSS_FILE=app.css

mkdir -p "$CSS_DIR"

echo "cat ${SASS_DIR}/*.scss | sassc > ${CSS_DIR}/${CSS_FILE}"
cat "${SASS_DIR}"/*.scss | sassc > "${CSS_DIR}/${CSS_FILE}"
