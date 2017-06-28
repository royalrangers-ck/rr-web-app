"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps =require('gulp-sourcemaps');

var autoprefixerOptions = {
    browsers: ['last 2 versions'],
};


module.exports = function () {
    var src = ['admin/static/sass/app.scss'];
    var destination = 'admin/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destination))
};
