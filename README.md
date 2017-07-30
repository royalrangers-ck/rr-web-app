# Royal Rangers [Frontend app]

Frontend-side for Royal Rangers activity.

## Getting Started

### Prerequisites

To simply run the application, install the following software:

- [Node.js](https://nodejs.org/uk/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

and if you want to develop an application, you also need to install:

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](https://www.vagrantup.com/)

### Prepare en environment:

Run the next command to download the repository

```
git clone -b develop https://github.com/royalrangers-ck/rr-web-app.git
```

### Running

To start an application:

1) install all dependencies

```
yarn
```

2) build project and start browserSync

```
gulp && gulp bs
```

## BrowserSync

To start server:

```
gulp bs
```

To stop server:

```
Ctrl + C
```

To enable watchers: 

```
gulp bs:all
```

Helpful links:

 - ``localhost:9000`` - web application;
 - ``localhost:3001`` - BrowserSync UI;



## Running the tests

To run test:

```
yarn run tests
```

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

* [AngularJS 1.6](https://angularjs.org/) - The web framework
* [NPM](https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi) - Dependency Management
* [Gulp](https://gulp.readme.io/docs/getting-started) - Used to compile and minify js and css
    
## Authors

* **Oleg Polishchuk** - *Frontend Lead Dev*
* **Daria Dementieva** - *Project Manager*
* **Alina** - *Frontend Dev*
* **Ilia Makarov** - *Frontend Dev*
* **Vasylij Dykun** - *Frontend Dev*
* **Dima Smoliar** - *JS Dev*
* **Andrey Kondakov** - *JS Dev*
* **Myroslav Telychko** - *JS Dev*
