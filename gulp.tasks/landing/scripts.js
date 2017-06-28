"use strict";

const gulp = require('gulp'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	ngAnnotate = require('gulp-ng-annotate'),
	sourcemaps = require('gulp-sourcemaps'),

	scripts = {
		landing: landing
	};

module.exports = scripts;

function landing() {
	const src = [
		'landing/app.js',
		'landing/config.js',
		'landing/**/*.js',
		'!landing/static/js/*.js'
	];
	const dest = 'landing/static/vendor/js/.';

	return gulp
		.src(src)
		.pipe(sourcemaps.init())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(babel({
			presets: ['es2015']
		}))
		.on('error', function(e) {
			console.log('>>> ERROR', e.message);
			this.emit('end');
		})
		.pipe(ngAnnotate())
		.pipe(concat('app.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dest))
};