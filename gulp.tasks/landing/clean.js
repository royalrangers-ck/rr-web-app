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
        'landing/*.css',
        'landing/**/*.css',
        'landing/static/vendor/*'
    ];

    return gulp
        .src(src, {
            read: false
        })
        .pipe(gulpClean())
};

function js() {
    const src = ['landing/static/vendor/js/*'];

    return gulp
        .src(src, {
            read: false
        })
        .pipe(gulpClean());
};