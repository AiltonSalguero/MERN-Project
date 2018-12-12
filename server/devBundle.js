import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './../webpack.config.client';
const webpack = require('webpack');

const compile = (app) => {
    if (process.env.NODE_ENV == 'development') {
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        })

        app.use(middleware);
        app.use(webpackMiddleware(compiler));
    }
}

export default {
    compile
}