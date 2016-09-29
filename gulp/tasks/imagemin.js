/// <reference path="../../node_modules/gulp/bin/gulp.js" />

'use strict';

var gulp = require('gulp');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');

// gulp images
// 壓縮圖片
gulp.task('images', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(notify('Minify Images Finish'));
});
