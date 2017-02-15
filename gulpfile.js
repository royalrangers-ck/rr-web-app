var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('install', function () {
    return gulp
        .src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',

            'app/*.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('app/static/vendor/js/.'))
});

