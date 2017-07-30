"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),

    scripts = {
        admin: admin,
    };

module.exports = scripts;

function admin() {
    const src = [
        'bootstrap/bootstrap.js',
        'admin/admin.app.js',
        'admin/admin.config.js',
        'admin/**/*.js',
        '!app/static/**/*.js'
    ];
    const dest = 'admin/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({
            dirname: ''
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', function (e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(ngAnnotate())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream: true}))
};