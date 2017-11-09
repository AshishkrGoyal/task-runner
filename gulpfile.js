const gulp = require('gulp');
const uglify = require('gulp-uglify');
const liveReload = require('gulp-livereload');

gulp.task('styles', function () {
    console.log('Ashishkr');
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
    gulp.watch('./js_/**/*.js',['scripts'])
});