'use strict'

import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import notify from 'gulp-notify';
import source from 'vinyl-source-stream';
import webserver from 'gulp-webserver';

const dirs = {
    src: 'src',
    dest: 'build'
};

gulp.task('js', () => {
    browserify({
            entries: [dirs.src + '/js/app.jsx'],
            extensions: ['.jsx', '.js'],
            debug: true // Add sourcemaps
        })
        .transform(babelify, {
            presets: ['react']
        }) // JSX and ES6 => JS
        .bundle() // Browserify bundles required files
        .on('error', console.error.bind(console))
        .on('error', notify.onError({
            message: 'Error: <%= error.message %>',
            sound: 'Sosumi'
        }))
        .pipe(source('app.js')) // Desired filename of bundled files
        .pipe(gulp.dest(dirs.dest + '/js'))
})

gulp.task('css', () => {
    gulp.src('node_modules/react-infinite-calendar/styles.css')
        .pipe(gulp.dest(dirs.dest + '/styles'))
})

gulp.task('html', () => {
    gulp.src(dirs.src + '/html/**/*.html')
        .pipe(gulp.dest(dirs.dest))
})

gulp.task('watch', () => {
    gulp.watch(dirs.src + '/js/**/*.js*', ['js'])
    gulp.watch(dirs.src + '/css/**/*.css', ['css']);
    gulp.watch(dirs.src + '/html/**/*.html', ['html'])
})

gulp.task('webserver', () => {
    gulp.src(dirs.dest)
        .pipe(webserver({
            livereload: true,
            open: true
        }))
})

gulp.task('default', ['js', 'css', 'html', 'watch', 'webserver'])