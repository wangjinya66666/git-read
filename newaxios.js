module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.zhuishushenqi.com/book/'
            }
        }
    }
}