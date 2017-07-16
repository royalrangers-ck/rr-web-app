#!/bin/bash

if [ "$EUID" -ne 0 ]; then
  echo "Please run this script on behalf of root user"
  exit 1
fi

# ------------------- #
#       NodeJS        #
# ------------------- #

curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -
apt-get install -y nodejs

# ------------------- #
#        Bower        #
# ------------------- #

npm install -g bower

# ------------------- #
#        Gulp         #
# ------------------- #

npm install gulpjs/gulp-cli -g
npm install gulpjs/gulp#4.0 -D

# ------------------- #
#       NGINX         #
# ------------------- #

# configure default site
cat >/etc/nginx/sites-available/default <<EOL
server {
        listen 80 default_server;
        listen [::]:80 default_server ipv6only=on;

        ##
        # Basic Settings
        ##

        add_header Cache-Control no-cache;

        ##
        # Gzip Settings
        ##

        gzip on;
        gzip_disable "msie6";

        gzip_vary on;
        gzip_proxied any;
        gzip_comp_level 6;
        gzip_buffers 16 8k;
        gzip_http_version 1.1;
        gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

        location / {
            root /usr/src/app/landing;
            index index.html index.html;
            sendfile off;
        }

        location /app {
            root /usr/src/app;
            index index.html index.html;
            sendfile off;
        }

        location /admin {
            root /usr/src/app;
            index index.html index.html;
            sendfile off;
        }

        ##
        # User application Settings
        ##

#        location ~* .*\/app\/.*\.(css)$ {
#            root /project;
#            add_header Cache-Control "max-age=31536000";
#            sendfile off;
#        }

#        location ~* .*\/app\/.*\.(js)$ {
#            root /project;
#            add_header Cache-Control "private, max-age=31536000";
#            sendfile off;
#        }

#        location ~* .*\/app\/.*\.(jpg|png|gif|svg)$ {
#            root /project;
#            add_header Cache-Control "max-age=86400";
#            sendfile off;
#        }

#        location ~* .*\/app\/.*\.(otf|eot|ttf|woff|woff2)$ {
#            root /project;
#            sendfile off;
#        }

        ##
        # Admin application Settings
        ##

#        location ~* .*\/admin\/.*\.(css)$ {
#            root /project;
#            add_header Cache-Control "max-age=31536000";
#            sendfile off;
#        }

#        location ~* .*\/admin\/.*\.(js)$ {
#            root /project;
#            add_header Cache-Control "private, max-age=31536000";
#            sendfile off;
#        }

#        location ~* .*\/admin\/.*\.(jpg|png|gif|svg)$ {
#            root /project;
#            add_header Cache-Control "max-age=86400";
#            sendfile off;
#        }

#        location ~* .*\/admin\/.*\.(otf|eot|ttf|woff|woff2)$ {
#            root /project;
#            sendfile off;
#        }

        ##
        # Landing & User application settings
        ##

#        location ~* \.(css)$ {
#            root /project/landing;
#            add_header Cache-Control "max-age=31536000";
#            sendfile off;
#        }

#        location ~* \.(js)$ {
#            root /project/landing;
#            add_header Cache-Control "private, max-age=31536000";
#            sendfile off;
#        }

#        location ~* \.(jpg|png|gif|ico|svg)$ {
#            root /project/landing;
#            add_header Cache-Control "max-age=86400";
#            sendfile off;
#        }

#        location ~* \.(otf|eot|ttf|woff|woff2)$ {
#            root /project/landing;
#            sendfile off;
#        }

        location ~ /api {
            proxy_pass http://api:8080;
        }

        # Max upload size
        client_max_body_size 100M;
}
EOL

service nginx reload