"use strict";

const gulp = require('gulp');

/* ------------------------------------------ */
/*                 Landing                    */
/* ------------------------------------------ */

// Main stream
gulp.task('clear:landing', require('./gulp.tasks/landing/clean').all);
gulp.task('copy:dep:landing', require('./gulp.tasks/landing/copy/dependencies').landing);
gulp.task('copy:googleMaps:landing', require('./gulp.tasks/landing/copy/dependencies').googleMaps);
gulp.task('copy:img:landing', require('./gulp.tasks/landing/copy/images').landing);
gulp.task('copy:fonts:landing', require('./gulp.tasks/landing/copy/fonts').landing);
gulp.task('copy:tpl:landing', require('./gulp.tasks/landing/copy/templates').landing);
gulp.task('js:landing', require('./gulp.tasks/landing/scripts.js').landing);
gulp.task('sass:landing', require('./gulp.tasks/landing/sass').landing);
gulp.task('updateSrcLinks:landing', require('./gulp.tasks/landing/update.src.links').landing);

// Main task
gulp.task('build:landing', gulp.series(
    'clear:landing',
    gulp.parallel(
        'copy:dep:landing',
        'copy:googleMaps:landing',
        'copy:img:landing',
        'copy:fonts:landing',
        'copy:tpl:landing',
        'js:landing',
        'sass:landing'),
    'updateSrcLinks:landing'
));

// Additional tasks
gulp.task('clear:js:landing', require('./gulp.tasks/landing/clean').js);
gulp.task('clear:css:landing', require('./gulp.tasks/landing/clean').styles);

// Watch tasks
gulp.task('sass:watch:landing', function () {
    const src = ['landing/static/sass/**/*.scss'];
    gulp.watch(src, gulp.series('clear:css:landing', 'sass:landing'));
});
gulp.task('js:watch:landing', function () {
    const src = ['landing/**/*.js', '!landing/static/**/*.*'];
    gulp.watch(src, gulp.series('clear:js:landing', 'js:landing'));
});

/* ------------------------------------------ */
/*                 Application                */
/* -------------------------------------------*/

// Main stream
gulp.task('clear:app', require('./gulp.tasks/application/clean').all);
gulp.task('copy:dep:app', require('./gulp.tasks/application/copy/dependencies').application);
gulp.task('copy:img:app', require('./gulp.tasks/application/copy/images').application);
gulp.task('copy:fonts:app', require('./gulp.tasks/application/copy/fonts').application);
gulp.task('copy:tpl:app', require('./gulp.tasks/application/copy/templates').application);
gulp.task('js:app', require('./gulp.tasks/application/scripts.js').application);
gulp.task('sass:app', require('./gulp.tasks/application/sass').application);
gulp.task('updateSrcLinks:app', require('./gulp.tasks/application/update.src.links').application);

// Main task
gulp.task('build:app', gulp.series(
    'clear:app',
    gulp.parallel(
        'copy:dep:app',
        'copy:img:app',
        'copy:fonts:app',
        'copy:tpl:app',
        'js:app',
        'sass:app'),
    'updateSrcLinks:app'
));

// Additional tasks
gulp.task('clear:js:app', require('./gulp.tasks/application/clean').js);
gulp.task('clear:css:app', require('./gulp.tasks/application/clean').styles);

// Watch tasks
gulp.task('js:watch:app', function () {
    const src = ['app/**/*.js', '!app/static/**/*.*'];
    gulp.watch(src, gulp.series('clear:js:app', 'js:app'));
});
gulp.task('sass:watch:app', function () {
    const src = ['app/static/sass/**/*.scss'];
    gulp.watch(src, gulp.series('clear:css:app', 'sass:app'));
});


/* ------------------------------------------ */
/*                 Admin                      */
/* ------------------------------------------ */

// Main stream
gulp.task('clear:admin', require('./gulp.tasks/admin/clean').all);
gulp.task('copy:dep:admin', require('./gulp.tasks/admin/copy/dependencies').admin);
gulp.task('copy:img:admin', require('./gulp.tasks/admin/copy/images').admin);
gulp.task('copy:fonts:admin', require('./gulp.tasks/admin/copy/fonts').admin);
gulp.task('copy:tpl:admin', require('./gulp.tasks/admin/copy/templates').admin);
gulp.task('js:admin', require('./gulp.tasks/admin/scripts.js').admin);
gulp.task('sass:admin', require('./gulp.tasks/admin/sass').admin);
gulp.task('updateSrcLinks:admin', require('./gulp.tasks/admin/update.src.links').admin);

// Main task
gulp.task('build:admin', gulp.series(
    'clear:admin',
    gulp.parallel(
        'copy:dep:admin',
        'copy:img:admin',
        'copy:fonts:admin',
        'copy:tpl:admin',
        'js:admin',
        'sass:admin'),
    'updateSrcLinks:admin'
));

// Additional tasks
gulp.task('clear:js:admin', require('./gulp.tasks/admin/clean').js);
gulp.task('clear:css:admin', require('./gulp.tasks/admin/clean').styles);

// Watch tasks
gulp.task('js:watch:admin', function () {
    const src = ['admin/**/*.js', '!admin/static/**/*.*'];
    gulp.watch(src, gulp.series('clear:js:admin', 'js:admin'));
});
gulp.task('sass:watch:admin', function () {
    const src = ['admin/static/sass/**/*.scss'];
    gulp.watch(src, gulp.series('clear:css:admin', 'sass:admin'));
});

/* ------------------------------------------ */
/*                 General                    */
/* ------------------------------------------ */

gulp.task('default', gulp.parallel(
    'build:landing',
    'build:app',
    'build:admin'
));
