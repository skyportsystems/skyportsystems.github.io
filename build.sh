#!/usr/bin/env bash

if [ -d "dist" ]; then
  echo "Creating \"dist\" folder"
  mkdir dist
fi

hugo -d dist
cp CNAME ./dist
