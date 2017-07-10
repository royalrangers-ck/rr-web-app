const gulp = require('gulp'),
    bSync = require('browser-sync'),
    http_proxy = require('http-proxy-middleware'),

    proxy_conf = {
        target: 'http://172.16.1.1:8080',
        changeOrigin: true,               // needed for virtual hosted sites 
        ws: true
    },

    api_link = http_proxy('/api', proxy_conf),

    config = {
        server: {
            baseDir: './landing',
            routes: {
                '/app': 'app',
                '/admin': 'admin'
            },
            middleware: [api_link]
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "Frontend_Royal-Rangers"
    },
    browserSync = {
        start: bs_start
    };

module.exports = browserSync;

function bs_start () {
    bSync(config);
}

gulp.task('bs_start', function () {
    bSync(config);
});

gulp.task('serv_watch', gulp.parallel(
    'bs_start',
    'sass:watch:landing',
    'sass:watch:app',
    'sass:watch:admin'
));
