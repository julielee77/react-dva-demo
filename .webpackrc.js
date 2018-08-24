/**
 * @file webpack config
 * @author lihaizhu
 * @since 2018/06/05
 */

export default {
    entry: 'src/index.js',
    extraBabelPlugins: [['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]],
    env: {
        development: {
            publicPath: '/',
            extraBabelPlugins: ['dva-hmr']
        },
        production: {
            publicPath: '/public/',
            extraBabelPlugins: ['transform-remove-console']
        }
    },
    define: {
        // private or baidu
        'process.env.PRODUCT_MODEL': 'private'
    },
    proxy: {
        '/api': {
            target: 'http://cp01-habo3-a.epc.baidu.com:8085',
            changeOrigin: true,
            pathRewrite: {'^/api': '/api'}
        }
    },
    ignoreMomentLocale: true,
    outputPath: 'public_gen',
    theme: './theme.js',
    alias: {
        Src: `${__dirname}/src`
    }
};
