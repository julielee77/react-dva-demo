/**
 * @file webpack 配置
 * @author lihaizhu
 * @since 2018/03/15
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const argv = require('yargs').argv;
const _ = require('lodash');

module.exports = webpackConfig => {
    const production = webpackConfig.output.publicpath !== '/';
    /* eslint-disable no-param-reassign */

    // 别名配置
    /* eslint-disable */
    webpackConfig.resolve.alias = {
        Src: `${__dirname}/src`
    };

    const envConfg = _.get(argv, 'process.env', undefined);
    // 获取 process.env.* 覆盖 已有属性
    if (envConfg) {
        const definePlugin = webpackConfig.plugins.find(element => {
            return element instanceof DefinePlugin;
        });
        Object.keys(envConfg).forEach(d => {
            const name = `process.env.${d}`;
            definePlugin.definitions[name] = JSON.stringify(envConfg[d]);
        });
    }

    // url-loader
    if (!webpackConfig.module.loaders) {
        webpackConfig.module.loaders = [];
    }
    webpackConfig.module.loaders.push({
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]'
    });

    if (production) {
        webpackConfig.plugins.push(
            new HtmlWebpackPlugin({
                template: `${__dirname}/src/index.ejs`,
                filename: `${__dirname}/public_gen/views/index.html`,
                production,
                minify: {collapseWhitespace: true},
                hash: true,
                inject: !production
            })
        );
    }

    return webpackConfig;
};
