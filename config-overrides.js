<<<<<<< HEAD
const {
    override,
    fixBabelImports
} = require('customize-cra');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
=======
const {
    override,
    fixBabelImports
} = require('customize-cra');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    })
>>>>>>> f879e2e6609ae8fc0d04ab0dcb2a4da9fb24a15a
);