module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://study.yuanjin.tech',
            }
        }
    }
}