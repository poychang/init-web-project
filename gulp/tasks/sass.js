/// <reference path="../../node_modules/gulp/bin/gulp.js" />

(function () {
    'use strict';

    var gulp = require('gulp');
    var streamqueue = require('streamqueue');
    var notify = require('gulp-notify');
    var sass = require('gulp-sass');
    var sourcemaps = require('gulp-sourcemaps');
    var rename = require('gulp-rename');

    // gulp jshint
    // 檢查 Javascript 語法，並做壓縮成 all.js
    gulp.task('sass', function () {
        return streamqueue({ objectMode: true },
            gulp.src('./src/styles/**/*.scss')              // 指定要處理的 SCSS 檔
                .pipe(sourcemaps.init())                    // 初始化 map 工具
                .pipe(sass().on('error', sass.logError))    // 編譯 SCSS
                .pipe(sourcemaps.write('./'))               // 輸出 map 檔
                .pipe(gulp.dest('./dist/css'))              // 輸出編譯後的 CSS 檔
                .pipe(notify({
                onLast: true,
                message:'Precompile SCSS Finish' 
            })),
            gulp.src('./src/styles/**/*.scss')              // 指定要處理的 SCSS 檔
                .pipe(sourcemaps.init())                    // 初始化 map 工具
                .pipe(sass({                                // 編譯並壓縮 SCSS
                    outputStyle: 'compressed'
                }).on('error', sass.logError))
                .pipe(rename({ extname: '.min.css' }))      // 更名成 .min.css
                .pipe(sourcemaps.write('./'))               // 輸出 map 檔
                .pipe(gulp.dest('./dist/css'))              // 輸出編譯後的 CSS 檔
                .pipe(notify({
                onLast: true,
                message:'Precompile SCSS and Minify Finish' 
            }))
        );
    });
})();