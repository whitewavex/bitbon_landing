"use strict"

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    clean = require('gulp-dest-clean'),
    server = require( 'gulp-server-livereload' );

var path = {
    build: {
        html: 'build/',
        styles: 'build/css',
        js: 'build/js',
        images: 'build/images',
        fonts: 'build/fonts'
    },
    src: {
        html: 'src/*.html',
        reset: 'src/scss/base/reset.scss',
        fontStyle: 'src/scss/base/fonts.scss',
        base: 'src/scss/base/base.scss',
        styles: 'src/scss/main/**/*.*',
        js: 'src/js/main.js',
        images: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*',
        cssLibs: 'src/libs/css/**/*.css',
        jsLibs: 'src/libs/js/**/*.js'
    },
    watch: {
        html: 'src/**/*.html',
        styles: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        images: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: 'build'
};

gulp.task('html', function() {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('styles', function() {
    gulp.src([path.src.reset, path.src.fontStyle, path.src.base, path.src.styles])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.styles));
});

gulp.task('js', function() {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('images', function() {
    gulp.src(path.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.images));
});

gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('libs:css', function() {
    gulp.src(path.src.cssLibs)
        .pipe(cssmin())
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(path.build.styles))
});

gulp.task('libs:js', function() {
    gulp.src(path.src.jsLibs)
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(path.build.js))
});

gulp.task('libs', ['libs:css', 'libs:js']);

gulp.task('build', ['html', 'styles', 'js', 'images', 'fonts', 'libs']);

gulp.task('watch', function() {
    gulp.watch(path.watch.html, ['html']);
    gulp.watch(path.watch.styles, ['styles']);
    gulp.watch(path.watch.js, ['js']);
    gulp.watch(path.watch.images, ['images']);
    gulp.watch(path.watch.fonts, ['fonts']);
});

gulp.task( 'server', function(){
    gulp.src('./build')
        .pipe(server({
            livereload: true,
            open: true
    }))
});

gulp.task('clean', function() {
    return gulp.src(path.clean, {read: false})
        .pipe(clean(path.clean));
});

gulp.task('default', ['build', 'server', 'watch']);
