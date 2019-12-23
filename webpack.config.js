const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

process.noDeprecation = true;
const isSSR = process.env.isSSR;

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
    },
};

const babelRule = {
    test: /\.(js|tsx?)$/,
    exclude: /node_modules/,
    // nested rules
    rules: [
        {
            use: babelLoader,
        },
        {
            use: {
                loader: 'react-docgen-typescript-loader',
            },
        },
    ],
};

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: false,
        plugins: () => [autoprefixer()],
    },
};

const stylusLoader = {
    loader: 'stylus-loader',
    options: {
        sourceMap: false,
    },
};

const stylusRule = {
    test: /\.styl$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', postcssLoader, stylusLoader],
};

const urlLoader = {
    loader: 'url-loader',
    options: {
        name: './images/[name].[hash].[ext]',
        limit: 8192,
    },
};

const imagesRule = {
    test: /\.(png|jpeg|jpg)$/,
    use: urlLoader,
};

const svgImagesRule = {
    test: /\.svg$/,
    oneOf: [
        {
            resourceQuery: /inline/,
            use: {
                loader: 'svg-sprite-loader',
                options: {
                    spriteModule: isSSR ?
                        'svg-sprite-loader/runtime/sprite.build' :
                        'svg-sprite-loader/runtime/browser-sprite.build'
                }
            },
        },
        {
            use: 'url-loader',
        },
    ],
};

const fontRule = {
    test: /\.ttf$/,
    use: urlLoader,
};

module.exports = {
    entry: isSSR? "./src/index.ssr.js" : "./src/index.js" ,
    output: {
        path: isSSR? path.join(__dirname, "dist/server") : path.join(__dirname, "dist/assets"),
        filename: "bundle.js",
        publicPath: "assets",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [babelRule, stylusRule, imagesRule, fontRule, svgImagesRule],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'bundle.css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        }),
    ]
};
