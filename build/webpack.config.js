const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./../package.json');

module.exports = (env) => {
    let NODE_ENV = env.NODE_ENV;
    let environment = env.environment;
    let versionString =
        NODE_ENV === 'latest'
            ? '"latest"'
            : '"' + pkg.version + (env === 'development' ? '-dev"' : '"');

    return {
        devtool: environment === 'production' ? 'none' : 'eval-source-map',
        mode: environment,
        entry: './src/index.ts',
        output: {
            filename:
                environment === 'production' ? 'bundle.min.js' : 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        comments: false,
                    },
                }),
            ],
        },
    };
};
