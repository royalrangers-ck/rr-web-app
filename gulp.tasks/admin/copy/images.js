"use strict";

var gulp = require('gulp');


module.exports = function () {
    var src = [
        'admin/static/images/*',
        'admin/static/images/**/*'
    ];
    var destination = 'admin/static/vendor/images/.';

    return gulp
        .src(src)
        .pipe(gulp.dest(destination))
};
