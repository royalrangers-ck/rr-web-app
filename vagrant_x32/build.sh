#!/bin/bash

cd /vagrant

# remove previous copy of application, if exist
if [ -d "project" ]; then
    rm -rf project
fi

mkdir project

# copy of application
cp -r  /project/app        ./project
cp -r  /project/landing    ./project

# zip project
tar -zcvf rr-web-app.tar.gz project

# remove copy of application
rm -R ./project

echo "==> Done!"