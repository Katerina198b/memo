const autoprefixer = require('autoprefixer');
const createMDXCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const storiesRegexp = /\.story\.(js|tsx?)$/;

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-env',
                {
                    'modules': false,
                },
            ],
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
            issuer: storiesRegexp,
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
    use: ['style-loader', 'css-loader', postcssLoader, stylusLoader],
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
    test: /\.(ttf|svg)$/,
    oneOf: [
        {
            resourceQuery: /inline/,
            use: 'svg-sprite-loader'
        },
        {
            use: urlLoader,
        },
    ],
};

const MDXStroriesRule = {
    test: /\.mdx$/,
    use: [
        babelLoader,
        {
            loader: '@mdx-js/loader',
            options: {
                compilers: [createMDXCompiler({})],
            },
        },
    ],
};

module.exports = ({config}) => ({
    ...config,
    resolve: {
        ...config.resolve,
        extensions: ['.ts', '.tsx', '.js', '.mdx', '.json'],
    },
    module: {
        ...config.module,
        rules: [babelRule, stylusRule, imagesRule, svgImagesRule, MDXStroriesRule],
    },
});
