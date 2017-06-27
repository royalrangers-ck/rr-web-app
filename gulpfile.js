"use strict";

const gulp = require('gulp');

/* ------------------------------------------ */
/*                 Landing                    */
/* ------------------------------------------ */

// Main stream
gulp.task('clear:landing', require('./gulp.tasks/landing/clean').all);
gulp.task('copy:dependencies:landing', require('./gulp.tasks/landing/copy/dependencies').landing);
gulp.task('copy:googleMaps:landing', require('./gulp.tasks/landing/copy/dependencies').googleMaps);
gulp.task('copy:images:landing', require('./gulp.tasks/landing/copy/images').landing);
gulp.task('copy:fonts:landing', require('./gulp.tasks/landing/copy/fonts').landing);
gulp.task('copy:templates:landing', require('./gulp.tasks/landing/copy/templates').landing);
gulp.task('scripts:landing', require('./gulp.tasks/landing/scripts.js').landing);
gulp.task('sass:landing', require('./gulp.tasks/landing/sass').landing);

// Main task
gulp.task('build:landing', gulp.series(
    'clear:landing',
    gulp.parallel(
        'copy:dependencies:landing',
        'copy:googleMaps:landing',
        'copy:images:landing',
        'copy:fonts:landing',
        'copy:templates:landing',
        'scripts:landing',
        'sass:landing',
        function updateSrcLinks(cb) {
            return require('./gulp.tasks/landing/updateSrcLinks').landing(cb)
        })
));

// Additional tasks
gulp.task('clear:landing:js', require('./gulp.tasks/landing/clean').js);

/* ------------------------------------------ */
/*                 Application                */
/* -------------------------------------------*/

// Main stream
gulp.task('clear:application', require('./gulp.tasks/application/clean').all);
gulp.task('copy:dependencies:application', require('./gulp.tasks/application/copy/dependencies').application);
gulp.task('copy:images:application', require('./gulp.tasks/application/copy/images').application);
gulp.task('copy:fonts:application', require('./gulp.tasks/application/copy/fonts').application);
gulp.task('copy:templates:application', require('./gulp.tasks/application/copy/templates').application);
gulp.task('scripts:application', require('./gulp.tasks/application/scripts.js').application);
gulp.task('sass:application', require('./gulp.tasks/application/sass').application);

// Main task
gulp.task('build:application', gulp.series(
    'clear:application',
    gulp.parallel(
        'copy:dependencies:application',
        'copy:images:application',
        'copy:fonts:application',
        'copy:templates:application',
        'scripts:application',
        'sass:application',
        function updateSrcLinks(cb) {
            return require('./gulp.tasks/application/updateSrcLinks').application(cb)
        })
));

// Additional tasks
gulp.task('clear:application:js', require('./gulp.tasks/application/clean').js);

/* ------------------------------------------ */
/*                 Admin                      */
/* ------------------------------------------ */

// In development....

/* ------------------------------------------ */
/*                 General                    */
/* ------------------------------------------ */

gulp.task('default', gulp.parallel(
    'build:landing',
    'build:application'
));

//
// Need add cool watchers
//
//
// /**
//  * Application: Watch & Compile styles
//  */
// gulp.task('sass:app:watch', function () {
//     gulp.watch('app/static/sass/**/*.scss', gulp.series('sass:app:dev'));
// });
//
// /**
//  * Landing: Watch & Compile styles
//  */
// gulp.task('sass:landing:watch', function () {
//     gulp.watch('landing/static/sass/**/*.scss', gulp.series('sass:landing:dev'));
// });
//
// /**
//  * Application: Watch & compile scripts
//  */
// gulp.task('js:app:watch', function () {
//     var src = [
//         'app/**/*.js',
//         '!app/static/vendor/**/*.*'
//     ];
//
//     gulp.watch(src, gulp.series(
//         'clear:app:js',
//         gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
//         'copyJs:app'
//     ));
// });
//
// /**
//  * Landing: Watch & compile scripts
//  */
// gulp.task('js:landing:watch', function () {
//     var src = [
//         'landing/**/*.js',
//         '!landing/static/vendor/**/*.*'
//     ];
//
//     gulp.watch(src, gulp.series(
//         'clear:landing:js',
//         gulp.parallel('copyScripts:landing', 'copyDep:landing', 'copyApp:landing'),
//         'copyJs:landing'
//     ));
// });
