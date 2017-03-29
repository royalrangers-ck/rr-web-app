"use strict";

const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


gulp.task('clear:app', () => {
    let src = [
        'app/*.css',
        'app/**/*.css',
        'app/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false})
        .pipe(clean())
});

gulp.task('clear:landing', () => {
    let src = [
        'landing/*.css',
        'landing/**/*.css',
        'landing/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false})
        .pipe(clean())
});

gulp.task('clear:app:js', () => {
    let src = ['app/static/vendor/js/*'];

    return gulp
        .src(src, {read: false})
        .pipe(clean());
});

gulp.task('copyDep:app', () => {
    let src = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',
        'bower_components/angular-growl-v2/build/angular-growl.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'bower_components/moment/min/moment.min.js',
        'bower_components/footable/dist/footable.all.min.js',
        'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'bower_components/metisMenu/dist/metisMenu.min.js',

        'app/static/js/*.js'
    ];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(gulp.dest(dest))
});

gulp.task('copyDep:landing', () => {
    let src = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',
        'bower_components/angular-growl-v2/build/angular-growl.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'bower_components/moment/min/moment.min.js',

        'landing/static/js/*.js',
        '!landing/static/js/google-maps.js'
    ];
    let dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(gulp.dest(dest))
});


gulp.task('copyScripts:app', () => {
    let src = ['app/static/js/*.js'];
    let dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyScripts:landing', () => {
    let src = ['landing/static/js/*.js'];
    let dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyApp:app', () => {
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

gulp.task('copyApp:landing', () => {
    let src = [
        'landing/app.js',
        'landing/config.js',
        'landing/**/*.js',
        '!landing/static/js/*.js'
    ];
    let dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dest))
});


gulp.task('copyJs:app', () => {
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

gulp.task('copyJs:landing', () => {
    let src = [
        'landing/static/vendor/js/dep.js',
        'landing/static/vendor/js/app.js'
    ];
    let dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(dest))
});


gulp.task('sass:app:dev', () => {
    let src = [
        'app/*.scss',
        'app/**/*.scss',
        '!app/static/sass/*.scss',
        '!app/static/sass/**/*.scss'
    ];
    let dest = './';

    return gulp
        .src(src, {base: './'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:app:prod', () => {
    let src = ['app/static/sass/app.scss'];
    let dest = 'app/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:app', gulp.parallel('sass:app:dev', 'sass:app:prod'));


gulp.task('sass:landing:dev', () => {
    let src = [
        'landing/*.scss',
        'landing/**/*.scss',
        '!landing/static/sass/*.scss',
        '!landing/static/sass/**/*.scss'
    ];
    let dest = './';

    return gulp
        .src(src, {base: './'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:landing:prod', () => {
    let src = ['landing/static/sass/app.scss'];
    let dest = 'landing/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:landing', gulp.parallel('sass:landing:dev', 'sass:landing:prod'));


gulp.task('copyImages:app', () => {
    let src = ['app/static/images/**/*.*'];
    let dest = 'app/static/vendor/images/.';

    return gulp
        .src(src)
        // ToDo.zpawn: uncommented after load real content
        //.pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyImages:landing', () => {
    let src = ['landing/static/images/**/*.*'];
    let dest = 'landing/static/vendor/images/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});


gulp.task('copyFonts:app', () => {
    let src = [
        'bower_components/font-awesome/fonts/*.*',
        'bower_components/footable/css/fonts/*.*',
        'app/static/fonts/*.*'
    ];
    let dest = 'app/static/vendor/fonts/.';

    /** FooTable need special folder for his fonts*/
    /** if need, please refactor this*/
    gulp.src('bower_components/footable/css/fonts/*.*')
        .pipe(gulp.dest('app/static/vendor/css/fonts/.'));

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyFonts:landing', () => {
    let src = [
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*',
        'landing/static/fonts/*.*'
    ];
    let dest = 'landing/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});


gulp.task('build:dev', gulp.parallel(

    /** Build Main Application */
    gulp.series(
        'clear:app',
        gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
        'copyJs:app',
        'copyImages:app',
        'sass:app',
        'copyFonts:app'
    ),

    /** Build Landing Application */
    gulp.series(
        'clear:landing',
        gulp.parallel('copyScripts:landing', 'copyDep:landing', 'copyApp:landing'),
        'copyJs:landing',
        'copyImages:landing',
        'sass:landing',
        'copyFonts:landing'
    )
));

/**
 * Build Application
 */
gulp.task('build:app:prod', gulp.series(
    'clear:app',
    gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
    'copyJs:app',
    'copyImages:app',
    'sass:app:prod',
    'copyFonts:app'
));

/**
 * Watch and compile Application styles
 */
gulp.task('sass:app:watch', () => {
    gulp.watch('app/static/sass/**/*.scss', gulp.series('sass:app:prod'));
});

/**
 * Watch and compile Landing styles
 */
gulp.task('sass:app:watch', () => {
    gulp.watch('app/static/sass/**/*.scss', gulp.series('sass:app:prod'));
});

/**
 * Watch and compile App scripts
 */
gulp.task('js:app:watch', () => {
    let src = [
        'app/**/*.js',
        '!app/static/vendor/**/*.*'
    ];

    gulp.watch(src, gulp.series(
        'clear:app:js',
        gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
        'copyJs:app'
    ));
});
