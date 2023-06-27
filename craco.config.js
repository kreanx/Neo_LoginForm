const path = require('path');
const addPath = dir => path.join(__dirname, dir);

const webpackConfig = {
    webpack: {
        alias: {
            "@": addPath("src"),
        },
        configure: (webpackConfig, { env, paths }) => {
            path.appBuild = 'dist'; 
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve(__dirname, 'dist'), 
                publicPath: '/',
            }
            webpackConfig.output.path = path.resolve(__dirname, 'dist');
            return webpackConfig;
        }
    },
}

module.exports = webpackConfig;