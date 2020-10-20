module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.zhuishushenqi.com',
                secure: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}