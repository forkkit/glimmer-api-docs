'use strict';

module.exports = function(environment) {
  let ENV = {
    rootURL: '/api/',
    modulePrefix: 'glimmer-api-docs',
    environment: environment,
    locationType: 'auto'
  };

  return ENV;
};
