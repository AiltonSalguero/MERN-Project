module.exports = {
    //Archivo de entrada
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        //Loaders - rules
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}