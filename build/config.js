var path = require('path');

// prod
let prod = {
    NODE_ENV: '"production"',
    BASE_API: '"/"',
    APP_ORIGIN: '""'
};

// dev base_api 根据后端需求定
let dev = {
    NODE_ENV: '"development"',
    BASE_API: '"/"',
    APP_ORIGIN: '""'
};

module.exports = {
    build: {
        env: prod,
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: '',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
    },
    dev: {
        env: dev,
        port: 10999,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
};
