/// <reference path="../../node_modules/gulp/bin/gulp.js" />

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// gulp jshint
// 檢查 Javascript 語法，並做壓縮成 all.js
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')   // 指定要處理的 Scss 檔案目錄
        .pipe(sass({                        // 編譯 Scss
            outputStyle: 'compressed'       // 壓縮
        }))
        .pipe(gulp.dest('dist/css'));       // 指定編譯後的 css 檔案目錄
});
