const { resolve } = require('path');

export default function i18nDefault() {
    this.addPlugin(resolve(__dirname, 'nuxt-i18n-default-plugin.js'));
}


module.exports.meta = require('../package.json');
