"use strict";

const gulp = require('gulp'),
	rename = require('gulp-rename'),

	images = {
		application: application,
	};

module.exports = images;


function application() {
	const src = ['app/static/images/**/*.*'];
	const dest = 'app/static/vendor/images/.';

	return gulp
		.src(src)
		// ToDo.zpawn: uncommented after load real content
		// .pipe(rename({dirname: ''}))
		.pipe(gulp.dest(dest))
};