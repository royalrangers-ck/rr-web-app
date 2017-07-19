const gulp = require('gulp'),
    bSync = require('browser-sync'),
    http_proxy = require('http-proxy-middleware'),

    proxy_conf = {
        target: 'http://localhost:8080',
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
        // reload: bs_reload //for some reasons doesn't work correct
    };

module.exports = browserSync;

function bs_start () {
    bSync(config);
}

// function bs_reload () {
//     return bSync.reload({stream: true});
// }