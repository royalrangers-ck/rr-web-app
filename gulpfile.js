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
gulp.task('clear:js:landing', require('./gulp.tasks/landing/clean').js);
gulp.task('clear:styles:landing', require('./gulp.tasks/landing/clean').styles);

// Watch tasks
gulp.task('sass:watch:landing', function () {
    const src = ['landing/static/sass/**/*.scss'];
    gulp.watch(src, gulp.series('clear:styles:landing', 'sass:landing'));
});
gulp.task('js:watch:landing', function () {
    const src = ['landing/**/*.js', '!landing/static/**/*.*'];
    gulp.watch(src, gulp.series('clear:js:landing', 'scripts:landing'));
});

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
gulp.task('clear:js:application', require('./gulp.tasks/application/clean').js);
gulp.task('clear:styles:application', require('./gulp.tasks/application/clean').styles);

// Watch tasks
gulp.task('js:watch:application', function () {
    const src = ['app/**/*.js', '!app/static/**/*.*'];
    gulp.watch(src, gulp.series('clear:js:application', 'scripts:application'));
});
gulp.task('sass:watch:application', function () {
    const src = ['app/static/sass/**/*.scss'];
    gulp.watch(src, gulp.series('clear:styles:application', 'sass:application'));
});


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
