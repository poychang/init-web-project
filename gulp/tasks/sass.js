/// <reference path="../../node_modules/gulp/bin/gulp.js" />

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// gulp jshint
// 檢查 Javascript 語法，並做壓縮成 all.js
gulp.task('sass', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});
