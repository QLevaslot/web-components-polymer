const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src('scripts/**/*.js')	// input dir
        .pipe(uglify()) // unglify
        .pipe(concat()) // concat
        .pipe(gulp.dest('tmp'));	// output dir
});