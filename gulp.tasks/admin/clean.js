"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');


module.exports = function() {
    var src = [
        'admin/index.html',
        'admin/auth/index.html',
        'admin/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false, allowEmpty: true})
        .pipe(clean())
};
