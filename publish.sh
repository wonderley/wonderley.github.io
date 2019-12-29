#!/bin/sh
set -e
gatsby clean
gatsby build
cp CNAME public
gh-pages -d public -b master