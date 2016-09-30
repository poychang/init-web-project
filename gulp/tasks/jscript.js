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
    return gulp.src('src/js/**/*.js')           // 指定要處理的 js 檔案目錄
        .pipe(jshint())                         // 檢查語法
        .pipe(jshint.reporter('default'))       // 回報檢查狀態
        .pipe(concat('all.js'))                 // 結合成一個 js 檔
        .pipe(uglify())                         // 壓縮
        .pipe(gulp.dest('dist/js'))             // 輸出
        .pipe(notify('Minify Javascript Finish'));
});
