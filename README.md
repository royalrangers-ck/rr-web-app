# Royal Rangers Frontend

Frontend-side for Royal Rangers activity.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](https://www.vagrantup.com/)

### Installing

1. Download and install VirtualBox from link

```
http://download.virtualbox.org/virtualbox/5.1.16/VirtualBox-5.1.16-113841-Win.exe
```

2. Download and install Vagrant from link

```
https://releases.hashicorp.com/vagrant/1.7.4/
```

3. Download and install NPM from link

```
https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi
```

4. Install Gulp 4

```
$ npm install gulpjs/gulp-cli -g
```

### Running

To start VM:

    $ cd ./royal-rangers-frontend/vagrant
    $ vagrant up

To update npm dependencies:

    $ cd ./royal-rangers-frontend
    $ npm install

To open app in browser:

    http://localhost:9990

To stop VM:

    $ cd ./royal-rangers-frontend/vagrant
    $ vagrant halt -f

To reload VM:

    $ cd ./royal-rangers-frontend/vagrant
    $ vagrant reload

To recreate VM:

    $ cd ./royal-rangers-frontend/vagrant
    $ vagrant destroy -f
    $ vagrant up


## Running the tests

To run test:

    $ cd ./royal-rangers-frontend
    $ karma start


### Coding style

For folders use camelCase. Examples of folder names:

    ./contactUs
    ./aboutUs
    ./forgotPasword

For files use dot. Examples of file names:

    app.js
    app.constant.js
    user.controller.js
    user.edit.controller.js


## Built With

* [AngularJS](https://angularjs.org/) - The web framework used
* [NPM](https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi) - Dependency Management
* [Gulp](https://gulp.readme.io/docs/getting-started) - Used to compile and minify js and css

## Authors

* **Oleg Polishchuk** - *Frontend team lead*
* **Daria Dementieva** - *Project Manager*
* **Alina** - *Frontend Dev*
* **Ilia Makarov** - *Frontend Dev*
* **Vasylij Dykun** - *Frontend Dev*
* **Dima Smoliar** - *JS Dev*
* **Andrey Kondakov** - *JS Dev*
* **Myroslav Telychko** - *JS Dev*

