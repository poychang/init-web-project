/// <reference path="../../node_modules/gulp/bin/gulp.js" />

var gulp = require('gulp');
var browserSync = require('browser-sync').create();     // 小型網頁伺服器
var config = require('../config.web.json');

// gulp serve
// 啟動小型網頁伺服器
gulp.task('serve', function () {
    browserSync.init(config.browserSync);
});
