'use strict';
const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}
exports.default = defaultTask;