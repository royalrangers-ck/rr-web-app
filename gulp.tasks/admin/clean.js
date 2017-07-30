"use strict";

const gulp = require('gulp'),
    gulpClean = require('gulp-clean'),

    clean = {
        all: all,
        js: js,
        styles: styles
    };

module.exports = clean;

function all() {
    const src = [
        'admin/index.html',
        'admin/static/vendor/*',
        'admin/**/*.css',
    ];

    return gulp
        .src(src, {
            read: false, allowEmpty: true
        })
        .pipe(gulpClean())
};

function js() {
    const src = ['admin/static/vendor/js/*'];

    return gulp
        .src(src, {
            read: false
        })
        .pipe(gulpClean());
};

function styles() {
    const src = ['admin/static/vendor/css/app.css'];

    return gulp
        .src(src, {
            read: false
        })
        .pipe(gulpClean());
};