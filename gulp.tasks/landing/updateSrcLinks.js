"use strict";

const fs = require('fs'),

	updateSrcLinks = {
		landing: landing
	};

module.exports = updateSrcLinks;

function landing(cb) {
	const files = ['landing/index.html'];

	files.forEach(function(path) {
		let file = fs.readFileSync(path, 'utf8');
		file = file.replace(/(\?t=[0-9]+)/g, '?t=' + Date.now());
		fs.writeFileSync(path, file);
	});

	cb();
};