
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    const tsLoader = getLoader(
        config.moudle.rules,
        rule => rule.loader && typeof rule.loader === 'string' && rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
                libraryDirectory: 'es',
                libraryName: 'antd',
                style: 'css'
            })]
        })
    }

    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: {
            "@primary-color": "#1DA57A", // 主题色
        },
    })(config, env);
    return config;
};