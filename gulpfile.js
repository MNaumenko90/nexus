'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass')

gulp.task('default', function(){
	gulp.watch('css/**', ['sass']);
});

gulp.task('sass', function(){
	return gulp.src('css/**')
	//.pipe(sass({includePaths: ['./node_modules/foundation-sites/scss']}))
	.pipe(sass())
	.pipe(gulp.dest('css'))
});


