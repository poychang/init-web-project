/// <reference path="../../node_modules/gulp/bin/gulp.js" />

(function () {
    'use strict';

    var gulp = require('gulp');
    var streamqueue = require('streamqueue');
    var sourcemaps = require('gulp-sourcemaps');
    var concat = require('gulp-concat');
    var jshint = require('gulp-jshint');
    var uglify = require('gulp-uglify');
    var notify = require('gulp-notify');
    var rename = require('gulp-rename');

    // gulp jshint
    // 檢查 Javascript 語法，並做壓縮成 app.js
    gulp.task('jscript', function () {
        return streamqueue({ objectMode: true },
            gulp.src('./src/scripts/**/*.js')           // 指定要處理的 js 檔案目錄
                .pipe(sourcemaps.init())                // 初始化 map 工具
                .pipe(jshint())                         // 檢查語法
                .pipe(jshint.reporter('default'))       // 回報檢查狀態
                .pipe(concat('app.js'))                 // 結合成一個 js 檔
                .pipe(sourcemaps.write('./'))           // 輸出 map 檔
                .pipe(gulp.dest('./dist/js'))             // 輸出
                .pipe(notify({
                    onLast: true,
                    message: 'Concat Javascript Finish'
                })),
            gulp.src('./src/scripts/**/*.js')           // 指定要處理的 js 檔案目錄
                .pipe(sourcemaps.init())                // 初始化 map 工具
                .pipe(jshint())                         // 檢查語法
                .pipe(jshint.reporter('default'))       // 回報檢查狀態
                .pipe(concat('app.js'))                 // 結合成一個 js 檔
                .pipe(uglify())                         // 壓縮
                .pipe(rename({ extname: '.min.js' }))   // 更名成 .min.js
                .pipe(sourcemaps.write('./'))           // 輸出 map 檔
                .pipe(gulp.dest('./dist/js'))             // 輸出
                .pipe(notify({
                    onLast: true,
                    message: 'Concat and Minify Javascript Finish'
                }))
        );
    });
})();