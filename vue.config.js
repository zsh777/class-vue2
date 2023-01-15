module.exports = {
  devServer: {
    // 开发调试服务器配置项
    open: true, // npm run serve后自动打开页面
    host: 'localhost', // 匹配本机IP地址
    port: 7777, // 开发服务器运行端口号
    compress: true, // 启用静态资源压缩算法 对所有服务启用gzip压缩
    proxy: {
      // 代理路径
      '/api': {
        // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:7777', // 代理目标的基础路径
        ws: true, // 启用WebSocket
        changeOrigin: true,
        pathRewrite: {
          // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
      '/foo': {
        target: 'http://localhost:7777',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/foo': ''}
      }
    }
  }
}
