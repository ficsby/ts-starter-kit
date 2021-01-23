const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    let NODE_ENV = env.NODE_ENV;
    let environment = env.environment;
    let versionString =
        NODE_ENV === 'latest'
            ? '"latest"'
            : '"' + pkg.version + (env === 'development' ? '-dev"' : '"');

    return {
        devtool: environment === 'production' ? 'none' : 'eval-source-map',
        sourceMap: environment === 'development',
        mode: environment,
        entry: './src/index.ts',
        output: {
            filename: environment ? 'bundle.min.js' : 'bundle.js',
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
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    };
};
