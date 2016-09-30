/// <reference path="../../node_modules/gulp/bin/gulp.js" />

'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
    // gulp.watch('src/images/*', ['images']);
    gulp.watch('src/js/**/*.js', ['jscript']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});