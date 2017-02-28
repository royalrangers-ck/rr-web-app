const gulp = require('gulp');
const concat = require('gulp-concat');
const bower = require('gulp-bower');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('install', [
    'install-bower',
    'concat-and-compile-application',
    'concat-all',
    'build:styles'
]);

/**
 * Install bower dependencies
 */
gulp.task('install-bower', () => {
    return bower();
});

/**
 * Concat all app files and Compile ES6 to ES5
 * */
gulp.task('concat-and-compile-application', () => {
    return gulp
        .src(['app/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('app/static/vendor/js/.'))
});

/**
 * Concat dependencies and app.js in one app.min.js
 */
gulp.task('concat-all', () => {
    return gulp
        .src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'app/static/vendor/js/app.min.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('app/static/vendor/js/.'))
});

gulp.task('build:styles', ['sass', 'icon']);

/**
 * Compile sass
 */
gulp.task('sass', function () {
    return gulp
        .src("sass/app.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/static/vendor/css'));
});

/**
 * Icon font
 */
gulp.task('icon', function () {
    return gulp
        .src('bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*.*')
        .pipe(gulp.dest('app/static/vendor/fonts'));
});

/**
 * Watcher sass
 */
gulp.task('sass:watch', ['sass'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
});

/**
 * Stuff for slider
 */
gulp.task('slider-sass', function () {

    gulp.src("app/slider/css/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/slider/css/'));

});

gulp.task('slider-copy', function () {

    gulp
        .src([
            'bower_components/bootstrap/dist/**',
        ])
        .pipe(gulp.dest('app/slider/bootstrap/'))

});
