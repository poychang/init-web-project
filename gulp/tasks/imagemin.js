/// <reference path="../../node_modules/gulp/bin/gulp.js" />

(function () {
    'use strict';
    var gulp = require('gulp');
    var notify = require('gulp-notify');
    var imagemin = require('gulp-imagemin');

    // gulp images
    // 壓縮圖片
    gulp.task('images', function () {
        return gulp.src('src/images/*')             // 指定要處理的圖片目錄
            .pipe(imagemin())                       // 壓縮圖片
            .pipe(gulp.dest('dist/images'))         // 輸出
            .pipe(notify('Minify Images Finish'));
    });
})();