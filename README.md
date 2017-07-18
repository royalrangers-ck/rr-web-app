# Royal Rangers [Frontend app]

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

4. Install Protractor

```
$ npm install protractor -g
```

### Running

To start VM:

    $ cd ./royal-rangers-frontend/scripts/vagrant/x64
    $ vagrant up

To update npm dependencies:

    $ cd ./royal-rangers-frontend
    $ npm install

To open app in browser:

    http://localhost:9990

To stop VM:

    $ cd ./royal-rangers-frontend/scripts/vagrant/x64
    $ vagrant halt -f

To reload VM:

    $ cd ./royal-rangers-frontend/scripts/vagrant/x64
    $ vagrant reload

To recreate VM:

    $ cd ./royal-rangers-frontend/scripts/vagrant/x64
    $ vagrant destroy -f
    $ vagrant up


## Running browserSync

How to install:
Use `"npm install"` in console;

How to use:
 - Enable server: "gulp bs";
 - Enable server and all watchers: "gulp bs:all";
 - Server and js watcher: "gulp bs:js";
 - Server and sass watcher: "gulp bs:sass";
 - Disable all: use "ctrl+c" buttons combination in console;

Links:
 - localhost:9000 - site;
 - localhost:3001 - BrowserSync UI;



## Running the tests

To run test:

    $ cd ./royal-rangers-frontend
    $ karma start


### Project style guide

Folder naming. For example:

    ./contact.us
    ./about.us
    ./forgot.password

File naming. For example:

    app.js
    app.constant.js
    user.controller.js
    user.edit.controller.js

Success response object:

    var successResponse = {
        success: true,
        data: {}
    }

Error response object:

    var errorResponse = {
        success: false,
        data: {
            message: "Internal server error"
        }
    }


## Built With

* [AngularJS](https://angularjs.org/) - The web framework used
* [NPM](https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi) - Dependency Management
* [Gulp](https://gulp.readme.io/docs/getting-started) - Used to compile and minify js and css

## Testing

To run Selenium end-to-end tests:

    $ cd ./tests/selenium
    $ webdriver-manager update && webdriver-manager start
    $ protractor conf.js
    
To run Karma unit tests:

    $ cd ./tests/karma
    $ karma start
    
    
## Authors

* **Oleg Polishchuk** - *Frontend Lead Dev*
* **Daria Dementieva** - *Project Manager*
* **Alina** - *Frontend Dev*
* **Ilia Makarov** - *Frontend Dev*
* **Vasylij Dykun** - *Frontend Dev*
* **Dima Smoliar** - *JS Dev*
* **Andrey Kondakov** - *JS Dev*
* **Myroslav Telychko** - *JS Dev*
