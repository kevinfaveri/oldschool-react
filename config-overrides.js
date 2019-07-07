const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'lib',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#ff6347',
      '@error-color': '#ff6347',
      '@btn-primary-color': '#2c313a',
      '@layout-body-background': '#424a57',
      '@layout-header-background': '#373e49',
      '@layout-footer-background': '#2c313a',
      '@layout-sider-background': '#373e49',
      '@label-required-color': '#FFF37F',
      '@label-color': '#FFFFF3',
      '@form-item-margin-bottom': '0px',
    },
  }),
  (config) => {
    const alias = config.resolve.alias || {};
    alias['@ant-design/icons/lib/dist$'] = path.resolve(
      __dirname,
      './src/utils/icons-on-demand.js',
    );

    config.resolve.alias = alias;

    return config;
  },
);
