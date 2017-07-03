"use strict";

const gulp = require('gulp'),
	rename = require('gulp-rename'),

	images = {
		admin: admin,
	};

module.exports = images;


function admin() {
	const src = ['admin/static/images/**/*.*'];
	const dest = 'admin/static/vendor/images/.';

	return gulp
		.src(src)
		// ToDo.zpawn: uncommented after load real content
		// .pipe(rename({dirname: ''}))
		.pipe(gulp.dest(dest))
};