/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
  });

  app.import({
    development: 'bower_components/canvas-datagrid/dist/canvas-datagrid.debug.js',
    production: 'bower_components/canvas-datagrid/dist/canvas-datagrid.js'
  });

  return app.toTree();
};
