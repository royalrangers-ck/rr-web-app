"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    fonts = {
        admin: admin,
    };

module.exports = fonts;


function admin() {
    const src = [
        'bower_components/font-awesome/fonts/*.*',
        'bower_components/footable/css/fonts/*.*',
        'app/static/fonts/*.*'
    ];
    const dest = 'admin/static/vendor/fonts/.';

    /** FooTable need special folder for his fonts*/
    /** if need, please refactor this*/
    gulp.src('bower_components/footable/css/fonts/*.*')
        .pipe(gulp.dest('admin/static/vendor/css/fonts/.'));

    // Same, but to boostsrap
    // if need, please refactor this
    gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*')
        .pipe(gulp.dest('admin/static/vendor/fonts/bootstrap/.'));

    return gulp
        .src(src)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(dest))
};