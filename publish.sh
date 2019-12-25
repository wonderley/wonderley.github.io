#!/bin/sh
set -e
rm -r public
gatsby build
cp CNAME public
gh-pages -d public -b master