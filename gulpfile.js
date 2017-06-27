//var elixir = require('laravel-elixir');
//
///*
// |--------------------------------------------------------------------------
// | Elixir Asset Management
// |--------------------------------------------------------------------------
// |
// | Elixir provides a clean, fluent API for defining some basic Gulp tasks
// | for your Laravel application. By default, we are compiling the Sass
// | file for our application, as well as publishing vendor resources.
// |
// */
//
//elixir(function(mix) {
//    mix.sass('app.scss');
//});

var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');


gulp.task('css', function () {
    return gulp.src('css/main.css')
        .pipe(autoprefixer('last 30 version'))
        .pipe(minifycss())
        .pipe(gulp.dest('css/min'))
        .pipe(notify({ message: "CSS Complied!"}));
});

gulp.task('default', function(){
    gulp.run('css');
});
