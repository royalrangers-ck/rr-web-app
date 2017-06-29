"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    templates = {
        application: application,
    };

module.exports = templates;

function application() {
    const src = ['app/index.tmpl.html'];

    return gulp
        .src(src, {
            base: './'
        })
        .pipe(rename({
            basename: 'index'
        }))
        .pipe(gulp.dest('./'))
};