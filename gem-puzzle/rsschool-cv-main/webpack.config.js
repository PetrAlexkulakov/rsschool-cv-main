let path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode =process.env.NODE_ENV || 'development';

const devMode= mode === 'development';

// const target = devMode ? 'web' : 'browserlist';
const devtool = devMode ? 'source-map' : undefined;

let conf={
    mode,
   // target,
    devtool,
    entry: path.resolve(__dirname,'Gem_Puzzle/js','init.js'),
    output: {
        path: path.resolve(__dirname, './Gem_Puzzle'),
        filename: 'main.js',
        //publicPath: 'Gem_Puzzle/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'Gem_Puzzle/html', 'index.html')
        }),
    ],
};

module.exports = conf;