# Create image based on the official Node 6 image from dockerhub
FROM ubuntu:14.04

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/docker

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY docker/bootstrap.sh /usr/src/app/docker

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nano
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git
RUN apt-get install -y g++
RUN apt-get install -y libkrb5-dev
RUN apt-get install -y dos2unix
RUN apt-get install -y nginx

# Install dependecies & nginx
RUN /bin/bash -c "dos2unix ./docker/bootstrap.sh"
RUN /bin/bash -c "source ./docker/bootstrap.sh"

# Get all the code needed to run the app
COPY . /usr/src/app

# Install dependecies
RUN npm install --unsafe-perm
RUN gulp

# Serve the app
ENTRYPOINT service nginx start && /bin/bash