#!/bin/bash

if [ -d "project" ]; then
    rm -rf project
fi

mkdir project

# copy application
cp -r  app        ./project
cp -r  landing    ./project

# zip project
tar -zcvf rr-web-app.tar.gz project

echo "==> Done!"