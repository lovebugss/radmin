/**
 * Created by renjp on 2018/12/26.
 */
const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}],
        config,
    );
    config = rewireLess.withLoaderOptions({
         modifyVars: {"@primary-color": "#ff25b7",
             "@box-shadow-base":"0 2px 8px rgba(0, 0, 0, .15)"},
        javascriptEnabled: true,
    })(config, env);
    return config;
};