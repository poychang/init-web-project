/// <reference path="../../node_modules/gulp/bin/gulp.js" />

(function () {
    'use strict';

    var gulp = require('gulp');

    // gulp styles
    // 任務清單：
    // 1. 編譯所開發的 CSS 樣式
    // 2. 複製所需字型檔
    gulp.task('styles', ['sass', 'fonts']);
})();