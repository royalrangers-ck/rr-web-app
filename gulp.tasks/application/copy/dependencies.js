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
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-resource/angular-resource.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-route-segment/build/angular-route-segment.min.js',
        'node_modules/angular-growl-v2/build/angular-growl.min.js',
        'node_modules/ngstorage/ngStorage.min.js',
        'node_modules/moment/min/moment.min.js',
        'node_modules/footable/dist/footable.all.min.js',
        'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
        'node_modules/metismenu/dist/metisMenu.min.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
        'node_modules/ng-idle/angular-idle.min.js',
        'node_modules/ng-img-crop/compile/minified/ng-img-crop.js',
        'node_modules/angular-ui-mask/dist/mask.min.js',

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