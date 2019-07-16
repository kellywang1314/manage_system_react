const path = require('webpack')
module.exports = {
    devServer:{
        contentBase:'./docs',
        historyApiFallback:true,
        inline:true
    }
}