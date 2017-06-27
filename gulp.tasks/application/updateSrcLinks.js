"use strict";

const fs = require('fs'),

	updateSrcLinks = {
		application: application,
	};

module.exports = updateSrcLinks;

function application(cb) {
	const files = ['app/index.html'];

	files.forEach(function(path) {
		let file = fs.readFileSync(path, 'utf8');
		file = file.replace(/(\?t=[0-9]+)/g, '?t=' + Date.now());
		fs.writeFileSync(path, file);
	});

	cb();
};