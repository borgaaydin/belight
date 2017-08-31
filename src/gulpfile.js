'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
const nunjucks = require('gulp-nunjucks');
var rename = require("gulp-rename");

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('css', ['nunjucks'], function() {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../build/css'));
});

gulp.task('uncss', ['sass'], function() {
    var plugins = [
        uncss({
            html: [
                '../build/index.html'
            ],
            ignore: [
                ".collapse",
                ".fade",
                ".fade.in",
                ".collapse",
                ".collapse.in",
                ".collapsing",
                ".open"
            ]
        })
        /*autoprefixer(autoprefixerOptions),
        cssnano()*/
    ];
    return gulp.src('css/style.css')
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('../build/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['css']);
});

gulp.task('nunjucks:watch', function () {
    gulp.watch(['*.html.njk', 'partials/*.html.njk'], ['nunjucks']);
});

gulp.task('nunjucks', function () {
    return gulp.src('*.html.njk')
        .pipe(nunjucks.compile())
        .pipe(rename(function (path) {
            path.extname = ""
        }))
        .pipe(gulp.dest('../build'));
});

gulp.task('copyImages', function () {
    return gulp.src('img/*.png')
        .pipe(gulp.dest('../build/img'));
});

gulp.task('copyJs', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'js/*.js'
    ])
        .pipe(gulp.dest('../build/js'));
});

gulp.task('default', ['css', 'copyImages', 'copyJs'], function() {

});