"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps =require('gulp-sourcemaps');

var autoprefixerOptions = {
    browsers: ['last 2 versions'],
};


function updateSrcLinks(cb) {
    var fs = require('fs'),
        files = ['app/index.html', 'landing/index.html'];

    files.forEach(function(path) {
        var file = fs.readFileSync(path, 'utf8');
        file = file.replace(/(\?t=[0-9]+)/g, '?t=' + Date.now());
        fs.writeFileSync(path, file);
    });

    cb();
}

gulp.task('copy-index-html', function () {
    var src = ['app/index.tmpl.html', 'landing/index.tmpl.html'];

    return gulp
        .src(src, {base: './'})
        .pipe(rename({basename: 'index'}))
        .pipe(gulp.dest('./'))
})

gulp.task('clear:app', function() {
    var src = [
        'app/*.css',
        'app/**/*.css',
        'app/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false})
        .pipe(clean())
});

gulp.task('clear:landing', function() {
    var src = [
        'landing/*.css',
        'landing/**/*.css',
        'landing/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false})
        .pipe(clean())
});

gulp.task('clear:app:js', function() {
    var src = ['app/static/vendor/js/*'];

    return gulp
        .src(src, {read: false})
        .pipe(clean());
});

gulp.task('clear:landing:js', function () {
    var src = ['landing/static/vendor/js/*'];

    return gulp
        .src(src, {read: false})
        .pipe(clean());
});

gulp.task('copyDep:app', () => {
    let src = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',
        'bower_components/angular-growl-v2/build/angular-growl.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'bower_components/moment/min/moment.min.js',
        'bower_components/footable/dist/footable.all.min.js',
        'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'bower_components/metisMenu/dist/metisMenu.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/ng-idle/angular-idle.min.js',
        'bower_components/ng-img-crop/compile/minified/ng-img-crop.js',
        'bower_components/angular-ui-mask/dist/mask.min.js',



        'app/static/js/*.js'
    ];
    var dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
});

gulp.task('copyDep:landing', function() {
    var src = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',
        'bower_components/angular-growl-v2/build/angular-growl.min.js',
        'bower_components/ngstorage/ngStorage.min.js',
        'bower_components/moment/min/moment.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/angular-ui-mask/dist/mask.min.js',

        'landing/static/js/*.js',
        '!landing/static/js/google-maps.js'
    ];
    var dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
});


gulp.task('copyScripts:app', function() {
    var src = ['app/static/js/*.js'];
    var dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyScripts:landing', function() {
    var src = ['landing/static/js/*.js'];
    var dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyApp:app', function() {
    var src = [
        'app/app.js',
        'app/config.js',
        'app/**/*.js',
        '!app/static/js/*.js'
    ];
    var dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .on('error', function(e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
});

gulp.task('copyApp:landing', function() {
    var src = [
        'landing/app.js',
        'landing/config.js',
        'landing/**/*.js',
        '!landing/static/js/*.js'
    ];
    var dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .on('error', function(e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
});


gulp.task('copyJs:app', function() {
    var src = [
        'app/static/vendor/js/dep.js',
        'app/static/vendor/js/app.js'
    ];
    var dest = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
});

gulp.task('copyJs:landing', function() {
    var src = [
        'landing/static/vendor/js/dep.js',
        'landing/static/vendor/js/app.js'
    ];
    var dest = 'landing/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
});


gulp.task('sass:app:dev', function() {
    var src = [
        'app/*.scss',
        'app/**/*.scss',
        '!app/static/sass/*.scss',
        '!app/static/sass/**/*.scss'
    ];
    var dest = './';

    return gulp
        .src(src, {base: './'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:app:prod', function() {
    var src = ['app/static/sass/app.scss'];
    var dest = 'app/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssnano())
        .pipe(gulp.dest(dest))
});

gulp.task('sass:app', gulp.parallel('sass:app:dev', 'sass:app:prod'));


gulp.task('sass:landing:dev', function() {
    var src = [
        'landing/*.scss',
        'landing/**/*.scss',
        '!landing/static/sass/*.scss',
        '!landing/static/sass/**/*.scss'
    ];
    var dest = './';

    return gulp
        .src(src, {base: './'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
});

gulp.task('sass:landing:prod', function() {
    var src = ['landing/static/sass/app.scss'];
    var dest = 'landing/static/vendor/css/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(concat('app.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssnano())
        .pipe(gulp.dest(dest))
});

gulp.task('sass:landing', gulp.parallel('sass:landing:dev', 'sass:landing:prod'));


gulp.task('copyImages:app', function() {
    var src = ['app/static/images/**/*.*'];
    var dest = 'app/static/vendor/images/.';

    return gulp
        .src(src)
        // ToDo.zpawn: uncommented after load real content
        // .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyImages:landing', function() {
    var src = ['landing/static/images/**/*.*'];
    var dest = 'landing/static/vendor/images/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});


gulp.task('copyFonts:app', function() {
    var src = [
        'bower_components/font-awesome/fonts/*.*',
        'bower_components/footable/css/fonts/*.*',
        'app/static/fonts/*.*'
    ];
    var dest = 'app/static/vendor/fonts/.';

    /** FooTable need special folder for his fonts*/
    /** if need, please refactor this*/
    gulp.src('bower_components/footable/css/fonts/*.*')
        .pipe(gulp.dest('app/static/vendor/css/fonts/.'));
    
    // Same, but to boostsrap
    // if need, please refactor this
    gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*')
        .pipe(gulp.dest('app/static/vendor/fonts/bootstrap/.'));

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});

gulp.task('copyFonts:landing', function() {
    var src = [
        'bower_components/font-awesome/fonts/*.*',
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*',
        'landing/static/fonts/*.*'
    ];
    var dest = 'landing/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(dest))
});


gulp.task('build:dev', gulp.parallel(
    /** Build Main Application */
    gulp.series(
        'clear:app',
        gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
        'copyJs:app',
        'copyImages:app',
        'sass:app',
        'copyFonts:app'
    ),

    /** Build Landing Application */
    gulp.series(
        'clear:landing',
        gulp.parallel('copyScripts:landing', 'copyDep:landing', 'copyApp:landing'),
        'copyJs:landing',
        'copyImages:landing',
        'sass:landing',
        'copyFonts:landing'
    ),

    gulp.series(
        'copy-index-html',
        function (cb) {
            return updateSrcLinks(cb)
        }
    )
));

/**
 * Build Landing
 */
gulp.task('build:landing:prod', gulp.series(
    'clear:landing',
    gulp.parallel('copyScripts:landing', 'copyDep:landing', 'copyApp:landing'),
    'copyJs:landing',
    'copyImages:landing',
    'sass:landing:prod',
    'copyFonts:landing'
));

/**
 * Build Application
 */
gulp.task('build:app:prod', gulp.series(
    'clear:app',
    gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
    'copyJs:app',
    'copyImages:app',
    'sass:app:prod',
    'copyFonts:app'
));

/**
 * Application: Watch & Compile styles
 */
gulp.task('sass:app:watch', function() {
    gulp.watch('app/static/sass/**/*.scss', gulp.series('sass:app:prod'));
});

/**
 * Landing: Watch & Compile styles
 */
gulp.task('sass:landing:watch', function() {
    gulp.watch('landing/static/sass/**/*.scss', gulp.series('sass:landing:prod'));
});

/**
 * Application: Watch & compile scripts
 */
gulp.task('js:app:watch', function() {
    var src = [
        'app/**/*.js',
        '!app/static/vendor/**/*.*'
    ];

    gulp.watch(src, gulp.series(
        'clear:app:js',
        gulp.parallel('copyScripts:app', 'copyDep:app', 'copyApp:app'),
        'copyJs:app'
    ));
});

/**
 * Landing: Watch & compile scripts
 */
gulp.task('js:landing:watch', function() {
    var src = [
        'landing/**/*.js',
        '!landing/static/vendor/**/*.*'
    ];

    gulp.watch(src, gulp.series(
        'clear:landing:js',
        gulp.parallel('copyScripts:landing', 'copyDep:landing', 'copyApp:landing'),
        'copyJs:landing'
    ));
});
