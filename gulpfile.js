/* npm install --save-dev gulp gulp-sass gulp-concat gulp-replace gulp-sass-variables gulp-clean gulp-uglify gulp-packer gulp-streamify */
var gulp = require('gulp'),
    sassVariables = require('gulp-sass-variables'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    packer = require('gulp-packer'),
    streamify = require('gulp-streamify')
    replace = require('gulp-replace');

var storecode = 'test-st51-truelight';

var bases = {
    src: 'src/',
    dist: 'dist/'
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

//Delete the dist directory
gulp.task('clean', function(){
    return gulp.src(bases.dist)
        .pipe(clean());
});

gulp.task('sass', ['clean'], function () {
    return gulp
        .src('./src/css/**/*.scss')
        .pipe(sassVariables({
            $storecode: storecode
        }))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});
// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
    gulp.src('./src/js/**/*.js')
        .pipe(concat('ps.min.js'))
        .pipe(uglify())
        .pipe(streamify(packer({base62: true, shrink: true})))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['clean','sass','scripts']);