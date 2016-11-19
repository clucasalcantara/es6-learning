//using gulp and babel to transpile your es6 code into es5 and es6 code, depend\
//ing of your navigator
const gulp = require('gulp');
const babel = require('gulp-babel');

//lets create our first task
gulp.task('es6', () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'))
});
