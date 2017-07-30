"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),

    fonts = {
        admin: admin,
    };

module.exports = fonts;


function admin() {
    const src = [
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/footable/css/fonts/*.*',
        'admin/static/fonts/*.*'
    ];
    const dest = 'admin/static/vendor/fonts/.';

    /** FooTable need special folder for his fonts*/
    /** if need, please refactor this*/
    gulp.src('node_modules/footable/css/fonts/*.*')
        .pipe(gulp.dest('admin/static/vendor/css/fonts/.'));

    // Same, but to boostsrap
    // if need, please refactor this
    gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*.*')
        .pipe(gulp.dest('admin/static/vendor/fonts/bootstrap/.'));

    return gulp
        .src(src)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(dest))
};