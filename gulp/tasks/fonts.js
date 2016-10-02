/// <reference path="../../node_modules/gulp/bin/gulp.js" />

(function () {
    'use strict';

    var gulp = require('gulp');
    var notify = require('gulp-notify');

    // gulp jshint
    // 檢查 Javascript 語法，並做壓縮成 all.js
    gulp.task('fonts', function () {
        return gulp.src('./src/fonts/**/*')            // 指定要處理的 SCSS 檔
            .pipe(gulp.dest('./dist/fonts'))            // 輸出編譯後的 CSS 檔
            .pipe(notify({
                onLast: true,
                message:'Move Fonts Finish' 
            }));
    });
})();