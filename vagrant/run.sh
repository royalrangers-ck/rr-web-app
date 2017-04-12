#!/bin/bash

# create backup, if project already exist
if [ -d "project" ]; then
    mv project project.old
fi

# unzip project
tar -zxvf $2

echo "==> Done!"