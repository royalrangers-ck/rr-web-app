#!/bin/bash

APP=rr-web-app.tar.gz
RSA=/project/ssh/id_rsa

if [ ! -f $RSA ]; then
  echo "Please add id_rsa file to /ssh dir"
  exit 1
fi

# copy scripts to remote server
scp -i $RSA $APP root@46.101.193.239:~/
scp -i $RSA run.sh root@46.101.193.239:~/

# run scripts on remote server
ssh -i $RSA root@46.101.193.239 "bash -s -- uno $APP" < run.sh

echo "==> Done!"