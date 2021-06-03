const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});


gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles"));
    gulp.watch("src/index.html").on("change",browserSync.reload);
    gulp.watch("src/html/*.html").on("change",browserSync.reload);
    gulp.watch("src/html/art/*.html").on("change",browserSync.reload);
});

gulp.task('default', gulp.parallel('watch','server','styles'));