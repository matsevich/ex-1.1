let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('html', function () {
    return gulp.src('**/*.html')
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('**/*.html', gulp.parallel('html'))
});