const path = require('webpack')
module.exports = {
    devServer:{
        contentBase:'../src',
        historyApiFallback:true,
        inline:true,
        hot: true
    }
}