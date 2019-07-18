let webpack = require('webpack')
let path = require('path')
const vendors = [
    'react',
    'react-dom',
    'react-router',
    'redux'
]
module.exports = {
    entry: vendors,
    output: {
        path:   __dirname + '/docs',
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            context: __dirname,
            name: '[name]_library',
        })
    ]
    
}