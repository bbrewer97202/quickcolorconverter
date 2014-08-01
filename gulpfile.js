var gulp = require('gulp');
var concat = require('gulp-concat');

//minified vendor javascript
gulp.task('scripts-vendor', function() {
    return gulp.src([
            './src/vendor/bower_components/angular/angular.min.js',
            './src/vendor/*.js',
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/js/'));
});

//source javascript
gulp.task('scripts', function() {
    return gulp.src(['./src/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./public/js/'));
});

//watch
gulp.task('watch', function() {
    gulp.watch('./src/*.js', ['scripts']);
});

//default task
gulp.task('default', ['scripts-vendor', 'scripts', 'watch']);
