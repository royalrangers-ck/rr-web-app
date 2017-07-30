"use strict";

const fs = require('fs'),

    updateSrcLinks = {
        admin: admin,
    };

module.exports = updateSrcLinks;

function admin(cb) {
    const files = ['admin/index.html'];

    files.forEach(function (path) {
        let file = fs.readFileSync(path, 'utf8');
        file = file.replace(/(\?t=[0-9]+)/g, '?t=' + Date.now());
        fs.writeFileSync(path, file);
    });

    cb();
};