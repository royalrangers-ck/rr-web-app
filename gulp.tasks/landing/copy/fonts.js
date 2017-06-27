"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    fonts = {
        landing: landing
    };

module.exports = fonts;


function landing() {
    const src = [
        'bower_components/font-awesome/fonts/*.*',
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*',
        'landing/static/fonts/*.*'
    ];
    const dest = 'landing/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(dest))
};