"use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');


exports.dependencies = function () {
    var src = [
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
        'bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/ng-idle/angular-idle.min.js',
        'bower_components/ng-img-crop/compile/minified/ng-img-crop.js',
        'bower_components/angular-ui-mask/dist/mask.min.js',

        'admin/static/js/*.js'
    ];
    var destination = 'admin/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destination))
};

exports.application = function () {
    var src = [
        'admin/admin.app.js',
        'admin/admin.constants.js',
        'admin/admin.config.js',
        'admin/**/*.js',
        '!admin/static/vendor/js/*.js'
    ];
    var destination = 'admin/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .on('error', function (e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(ngAnnotate({single_quotes: true}))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destination))
};
