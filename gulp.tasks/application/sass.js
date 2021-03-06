"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),
    gulpSass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),

    autoprefixerOptions = {
        browsers: ['last 2 versions']
    },

    gulpArguments = require('yargs').argv,

    sass = {
        application: application,
    };

module.exports = sass;

function application() {
    const src = ['app/static/sass/app.scss'];
    const dest = 'app/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(gulpif(gulpArguments.dev, sourcemaps.init(), rename({
            dirname: ''
        })))
        .pipe(gulpif(!gulpArguments.dev, concat('app.scss')))
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulpif(gulpArguments.dev, sourcemaps.write(), cssnano()))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
};