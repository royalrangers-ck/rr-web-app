"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    templates = {
        landing: landing,
    };

module.exports = templates;


function landing() {
    const src = ['landing/index.tmpl.html'];

    return gulp
        .src(src, {
            base: './'
        })
        .pipe(rename({
            basename: 'index'
        }))
        .pipe(gulp.dest('./'))
};