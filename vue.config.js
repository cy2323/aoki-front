// let proxyObj = {}
// proxyObj['/'] = {
//         // websocket
//         ws: false,
//         target: 'http://localhost:9090/aoki-mall',
//         // 发送请求头host会被设置target
//         changeOrigin: true,
//         // 不重写请求地址
//         pathRewrite: {
//             '^/': '/'
//         }
//     },

module.exports = { 
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/': {
                // websocket
                ws: true,
                // false为http访问，true为https访问
                secure: false,
                target: 'http://127.0.0.1:9090/aoki-mall',
                // 发送请求头host会被设置target
                changeOrigin: true,
                // 不重写请求地址
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
}