const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('styles', function () {
    console.log('Ashishkr');
});


gulp.task('scripts',function () {
    console.log('Ashishkr At Starting Scripts');

    return gulp.src('./js_/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js_/js_min'))
});


gulp.task('images',function () {
    console.log('Ashishkr At Images Task');
});


gulp.task('default', function () {
    console.log('Ashishkr At Default Task');
});