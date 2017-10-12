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

var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     'ftp.borga.fr',
        user:     'borga',
        password: 'pKFT2yej3NvzvUFb',
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        'src/**',
        'css/**',
        'js/**',
        'fonts/**',
        'index.html'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( '../build/**', { buffer: false } )
        .pipe( conn.dest( '/www/belight' ) );

} );

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('css', ['nunjucks'], function() {
    return gulp.src('scss/style.scss')
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
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
    gulp.watch(['*.html.njk', 'partials/*.html.njk'], ['css']);
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
    return gulp.src('img/**')
        .pipe(gulp.dest('../build/img'));
});

gulp.task('copyFonts', function () {
    return gulp.src('bower_components/components-font-awesome/fonts/**')
        .pipe(gulp.dest('../build/fonts'));
});

gulp.task('copyJs', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/photoswipe/dist/photoswipe.min.js',
        'bower_components/photoswipe/dist/photoswipe-ui-default.min.js',
        'js/*.js'
    ])
        .pipe(gulp.dest('../build/js'));
});

gulp.task('default', ['css', 'copyImages', 'copyJs'], function() {

});

gulp.task('build&deploy', ['css', 'copyImages', 'copyJs', 'deploy'], function() {

});