var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    notify = require('gulp-notify');

    // HTML Tasks
gulp.task('html', function(){
    return gulp.src('stage/html/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
        .pipe(notify("HTML Task is Done"))
        .pipe(livereload())
})

// Css Tasks
gulp.task('css', function(){
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefix())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
})

// JS Tasks
gulp.task('js', function(){
    return gulp.src('stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
})

// Watch Task
gulp.task('watch', function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('stage/**/*.pug', gulp.series('html'))
    gulp.watch('stage/css/**/*.scss', gulp.series('css'))
    gulp.watch('stage/js/*.js', gulp.series('js'))
})


