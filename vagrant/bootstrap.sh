#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  echo "Please run this script on behalf of root user"
  exit 1
fi

# ------------------- #
#       NodeJS        #
# ------------------- #

# install Node.js
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
apt-get install -y nodejs

# ------------------- #
#    Grunt & Bower    #
# ------------------- #

apt-get install -y g++
apt-get install -y libkrb5-dev

npm install -g grunt-cli
npm install -g bower

# ------------------- #
#        Gulp         #
# ------------------- #

npm install gulpjs/gulp-cli -g
npm install gulpjs/gulp#4.0 -D

# ------------------- #

# Install App dependencies
#cd /project
#rm -rf node_modules
#npm install --unsafe-perm
#grunt install

# ------------------- #
#       NGINX         #
# ------------------- #

# install nginx
apt-get install -y nginx

# configure default site
cat >/etc/nginx/sites-available/default <<EOL
server {
        listen 80 default_server;
        listen [::]:80 default_server ipv6only=on;

        location / {
            root /project/app;
            index index.html index.html;
        }

        location ~* \.(js|jpg|png|ico|css|otf|eot|svg|ttf|woff|woff2)$ {
            root /project/app;
            sendfile off;
        }

        location ~ /api {
            proxy_pass http://172.16.1.1:8080;
        }

        # Max upload size
        client_max_body_size 100M;
}
EOL

# reload configuration
service nginx reload
