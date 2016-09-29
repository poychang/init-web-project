/// <reference path="../../node_modules/gulp/bin/gulp.js" />

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

// gulp jshint
// 檢查 Javascript 語法，並做壓縮成 all.js
gulp.task('jscript', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify('Minify Javascript Finish'));
});
