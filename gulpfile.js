//using gulp and babel to transpile your es6 code into es5 and es6 code
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

//Now lets use browserify and babelify to help us through our module construction
gulp.task('es6', () => {
    browserify('src/app.js')
        .transform('babelify', {
            presets: ['es2015']
        })
        .bundle()
        .pipe(source('src/app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['es6'], () => {
    gulp.watch('src/app.js', ['es6'])
});
