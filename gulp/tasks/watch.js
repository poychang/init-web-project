/// <reference path="../../node_modules/gulp/bin/gulp.js" />

(function () {
    'use strict';
    
    var gulp = require('gulp');

    gulp.task('watch', function () {
        // gulp.watch('src/images/*', ['images']);
        gulp.watch('src/scripts/**/*.js', ['jscript']);
        gulp.watch('src/styles/**/*.scss', ['sass']);
    });
})();