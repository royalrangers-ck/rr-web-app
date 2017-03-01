"use strict";
const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


function clear() {
    let src = ['app/static/vendor/*'];

    return gulp
        .src(src, {read: false})
        .pipe(clean())
}


function copyDep() {
    let sourceFiles = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',

        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',

        'app/static/js/*.js'
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(sourceFiles)
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(gulp.dest(dest))
}


function copyApp() {
    let sourceFiles = [
        'app/app.js',
        'app/config.js',
        'app/**/*.js',
        '!app/static/js/*.js',
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(sourceFiles)
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest))
}


function copyJs() {
    let sourceFiles = [
        'app/static/vendor/js/dep.js',
        'app/static/vendor/js/app.js',
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(sourceFiles)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(dest))
}


function copySass() {
    let src = ['app/static/sass/app.scss'];
    let dest = 'app/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(sass())
        .pipe(gulp.dest(dest))
}


function copyImages() {
    let src = ['app/static/images/*.*'];
    let dest = 'app/static/vendor/images/.';

    return gulp

        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
}

function copyFonts() {
    let src = [
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*',
        'app/static/fonts/*.*',
    ];
    let dest = 'app/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
}


gulp.task('rr-copy', gulp.series(
    clear,
    gulp.parallel(copyDep, copyApp),
    copyJs,
    copyImages,
    copySass,
    copyFonts
));

