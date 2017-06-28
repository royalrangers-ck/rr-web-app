"use strict";

const gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),


    dependencies = {
        application: application,
    };

module.exports = dependencies;

function application() {
    const src = [
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

        'app/static/js/*.js'
    ];
    const dest = 'app/static/vendor/js/.';


    return gulp
        .src(src)
        .pipe(sourcemaps.init({
            loadMaps: true,
            largeFile: true
        }))
        .pipe(rename({
            dirname: ''
        }))
        .pipe(concat('dep.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest))
};