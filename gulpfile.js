"use strict";

const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


gulp.task('clear', () => {
    let src = [
        'app/*.css',
        'app/**/*.css',
        'app/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false})
        .pipe(clean())
});


gulp.task('copyDep', () => {
    let src = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',

        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',
        'bower_components/angular-growl-v2/build/angular-growl.min.js',

        'app/static/js/*.js',
        '!app/static/js/google-maps.js'
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(gulp.dest(dest))
});

gulp.task('copyScripts', () => {
    let src = ['app/static/js/google-maps.js'];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyApp', () => {
    let src = [
        'app/app.js',
        'app/config.js',
        'app/**/*.js',
        '!app/static/js/*.js'
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest))
});

gulp.task('copyJs', () => {
    let src = [
        'app/static/vendor/js/dep.js',
        'app/static/vendor/js/app.js'
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(dest))
});


gulp.task('sass:dev', () => {
    let src = [
        'app/app/*.scss',
        'app/app/**/*.scss',
        'app/landing/*.scss',
        'app/landing/**/*.scss'
    ];
    let dest = './';

    return gulp
        .src(src, {base: './'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:prod', () => {
    let src = [
        'app/static/sass/app.scss',
        'app/app/*.scss',
        'app/app/**/*.scss',
        'app/landing/*.scss',
        'app/landing/**/*.scss'
    ];
    let dest = 'app/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass', gulp.parallel('sass:dev', 'sass:prod'));


gulp.task('copyImages', () => {
    let src = ['app/static/images/**/*.*'];
    let dest = 'app/static/vendor/images/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});


gulp.task('copyFonts', () => {
    let src = [
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*',
        'app/static/fonts/*.*'
    ];
    let dest = 'app/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});


gulp.task('build:dev', gulp.series(
    'clear',
    gulp.parallel('copyScripts', 'copyDep', 'copyApp'),
    'copyJs',
    'copyImages',
    gulp.parallel('sass:dev', 'sass:prod'),
    'copyFonts'
));

gulp.task('build:prod', gulp.series(
    'clear',
    gulp.parallel('copyScripts', 'copyDep', 'copyApp'),
    'copyJs',
    'copyImages',
    'sass:prod',
    'copyFonts'
));

/**
 * Watch and compile styles
 */
gulp.task('rr-sass:watch', () => {
    gulp.watch('app/static/sass/**/*.scss', gulp.series('sass'));
});
