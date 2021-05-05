const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'widget.js',
        library: {
            name: 'Widget',
            type: "umd",
            export: ['default']
        },
        publicPath: '/dist/'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}