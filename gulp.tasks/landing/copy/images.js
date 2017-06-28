"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    images = {
        landing: landing
    };

module.exports = images;

function landing() {
    const src = ['landing/static/images/**/*.*'];
    const dest = 'landing/static/vendor/images/.';

    return gulp
        .src(src)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(dest))
};