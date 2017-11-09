const gulp = require('gulp');
const uglify = require('gulp-uglify');
const liveReload = require('gulp-livereload');
const concat = require('gulp-concat');


gulp.task('styles', function () {
    console.log('Ashishkr');
    return gulp.src('./css_/**/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css_min/'))
        .pipe(liveReload())
});


gulp.task('scripts',function () {
    console.log('Ashishkr At Starting Scripts');

    return gulp.src('./js_/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js_min'))
        .pipe(liveReload())
});


gulp.task('images',function () {
    console.log('Ashishkr At Images Task');
});


gulp.task('default', function () {
    console.log('Ashishkr At Default Task');
});

gulp.task('watch',function () {
    console.log('Ashishkr At Watcher!!');
    require('./server');
    liveReload.listen();
    gulp.watch(['./js_/**/*.js','./css_/**/*css'],['scripts','styles'])
});