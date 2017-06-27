"use strict";

const gulp = require('gulp'),
    gulpClean = require('gulp-clean'),

    clean = {
        all: all,
        js: js,
    };

module.exports = clean;

function all() {
    const src = [
        'app/*.css',
        'app/**/*.css',
        'app/static/vendor/*'
    ];

    return gulp
        .src(src, {
            read: false
        })
        .pipe(gulpClean())
};

function js() {
    const src = ['app/static/vendor/js/*'];

    return gulp
        .src(src, {
            read: false
        })
        .pipe(gulpClean());
};