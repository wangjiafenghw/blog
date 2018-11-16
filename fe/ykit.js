module.exports = {
    plugins: ['antd'],
    config: {
        exports: [
            ['babel-polyfill', './index.js'],
            './index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            return baseConfig;
        }
    }
};