/*
1. Install Node
2. Install Gulp Globally - npm rm -g gulp (Remove if necessary)
                           npm install -g gulp-cli
3. Install Gulp Locally - npm uninstall gulp --save-dev (Remove if necessary - We need v4 for series option)
                          npm install 'gulpjs/gulp.git#4.0' --save-dev
4. Install Modules - npm install --save-dev gulp gulp-zip gulp-sass gulp-concat gulp-replace gulp-sass-variables gulp-clean gulp-uglify gulp-packer gulp-streamify gulp-replace
*. If having issues with errors relating to phyton/node-gyp(https://www.npmjs.com/package/node-gyp) and are on windows run - npm install --global --production windows-build-tools
*/
var gulp = require('gulp'),
    sassVariables = require('gulp-sass-variables'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    packer = require('gulp-packer'),
    streamify = require('gulp-streamify'),
    zip = require('gulp-zip'),
    replace = require('gulp-replace');

var storecode = 'test-st51-trueligh';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

//Delete the dist directory
gulp.task('clean', function(){
    return gulp.src(['dist/','aabaco/lib/','aabaco/lib.zip'])
        .pipe(clean());
});
gulp.task('sass', function () {
    return gulp
        .src('./src/css/**/*.scss')
        .pipe(sassVariables({
            $storecode: storecode
        }))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./aabaco/lib'));
});
// Process scripts and concatenate them into one output file
gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('tlw.ps.js'))
        .pipe(uglify())
        .pipe(streamify(packer({base62: true, shrink: true})))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('./aabaco/lib'));
});
gulp.task('aabacohead', function(){
    return gulp.src(['./aabaco/misc/head.txt'])
        .pipe(replace('$storecode', storecode))
        .pipe(gulp.dest('./aabaco/'));
});
gulp.task('aabacocopy', function(){
    return gulp.src('./aabaco/src/*')
        .pipe(gulp.dest('./aabaco/lib'))
});
gulp.task('aabacozip', function(){
    return gulp.src('aabaco/lib/**')
        .pipe(zip('lib.zip'))
        .pipe(gulp.dest('aabaco'))
});
gulp.task('default', gulp.series('clean','sass','scripts','aabacocopy','aabacozip','aabacohead'));