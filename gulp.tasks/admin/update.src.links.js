"use strict";

var gulp = require('gulp');
var fs = require('fs');


module.exports = function (callback) {
    var files = ['admin/index.html'];

    files.forEach(function (path) {
        var file = fs.readFileSync(path, 'utf8');
        file = file.replace(/(\?t=[0-9]+)/g, '?t=' + Date.now());
        fs.writeFileSync(path, file);
    });

    callback();
};
