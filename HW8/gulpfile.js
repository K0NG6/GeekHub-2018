var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./project/style/scss/**/*.scss')
        .pipe(sass({
            // outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest('./project/style/css'));
})

gulp.task('watch', function () {
    gulp.watch('./project/style/scss/**/*.scss', ['sass']);
});