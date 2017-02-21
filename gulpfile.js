const gulp = require('gulp');
const concat = require('gulp-concat');
const bower = require('gulp-bower');
const babel = require('gulp-babel');

gulp.task('install', [
    'install-bower',
    'concat-and-compile-application',
    'concat-all'
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
            'bower_components/angular/angular.min.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-route-segment/build/angular-route-segment.js',
            'app/static/vendor/js/app.min.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('app/static/vendor/js/.'))
});

