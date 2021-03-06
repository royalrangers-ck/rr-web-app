"use strict";

const gulp = require('gulp');

/* ------------------------------------------ */
/*                 Landing                    */
/* ------------------------------------------ */

// Main stream
gulp.task('clear:landing', require('./gulp.tasks/landing/clean').all);
gulp.task('copy:dep:landing', require('./gulp.tasks/landing/copy/dependencies').landing);
gulp.task('copy:img:landing', require('./gulp.tasks/landing/copy/images').landing);
gulp.task('copy:fonts:landing', require('./gulp.tasks/landing/copy/fonts').landing);
gulp.task('copy:tpl:landing', require('./gulp.tasks/landing/copy/templates').landing);
gulp.task('js:landing', require('./gulp.tasks/landing/scripts.js').landing);
gulp.task('sass:landing', require('./gulp.tasks/landing/sass').landing);
gulp.task('updateSrcLinks:landing', require('./gulp.tasks/landing/update.src.links').landing);
gulp.task('bs:start', require('./gulp.tasks/browserSync/browserSync').start);

// Main task
gulp.task('build:landing', gulp.series(
    'clear:landing',
    gulp.parallel(
        'copy:dep:landing',
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
    gulp.watch(src, { readDelay: 200 }, gulp.series('sass:landing'));
});
gulp.task('js:watch:landing', function () {
    const src = ['landing/**/*.js', '!landing/static/**/*.*'];
    gulp.watch(src, { readDelay: 200 }, gulp.series(
        'clear:js:landing',
        gulp.parallel('copy:dep:landing', 'js:landing')
    ));
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
    gulp.watch(src, { readDelay: 200 }, gulp.series(
        'clear:js:app',
        gulp.parallel('copy:dep:app', 'js:app')
    ));
});
gulp.task('sass:watch:app', function () {
    const src = ['app/static/sass/**/*.scss'];
    gulp.watch(src, { readDelay: 200 }, gulp.series('sass:app'));
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
    gulp.watch(src, { readDelay: 200 }, gulp.series(
        'clear:js:admin',
        gulp.parallel('copy:dep:admin', 'js:admin')
    ));
});
gulp.task('sass:watch:admin', function () {
    const src = ['admin/static/sass/**/*.scss'];
    gulp.watch(src, { readDelay: 200 }, gulp.series('sass:admin'));
});

/* ------------------------------------------ */
/*                 Watchers                   */
/* ------------------------------------------ */

gulp.task('sass:watch', gulp.parallel(
    'sass:watch:landing',
    'sass:watch:app',
    'sass:watch:admin'
));

gulp.task('js:watch', gulp.parallel(
    'js:watch:landing',
    'js:watch:app',
    'js:watch:admin'
));

gulp.task('all:watch', gulp.parallel(
    'js:watch',
    'sass:watch'
));

/* ------------------------------------------ */
/*                 BrowserSync                */
/* ------------------------------------------ */

gulp.task('bs', gulp.parallel(
    'bs:start'
));

gulp.task('bs:all', gulp.parallel(
    'bs:start',
    'all:watch'
));

gulp.task('bs:sass', gulp.parallel(
    'bs:start',
    'sass:watch'
));

gulp.task('bs:js', gulp.parallel(
    'bs:start',
    'js:watch'
));

/* ------------------------------------------ */
/*                 General                    */
/* ------------------------------------------ */

gulp.task('default', gulp.parallel(
    'build:landing',
    'build:app',
    'build:admin'
));