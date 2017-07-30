"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    templates = {
        admin: admin,
    };

module.exports = templates;

function admin() {
    const src = ['admin/index.tmpl.html'];

    return gulp
        .src(src, {
            base: './'
        })
        .pipe(rename({
            basename: 'index'
        }))
        .pipe(gulp.dest('./'))
};