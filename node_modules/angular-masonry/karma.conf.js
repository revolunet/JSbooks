module.exports = function (config) {
  'use strict';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/sinonjs/sinon.js',
      'bower_components/jasmine-sinon/lib/jasmine-sinon.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/angular-masonry.js',
      'test/mocks/**/*.js',
      'test/spec/**/*.coffee'
    ],
    preprocessors: {
      '**/*.coffee': ['coffee']
    },
    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function (path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },
    exclude: [],
    reporters: ['dots'],
    autoWatch: false,
    browsers: ['Chrome'],
    captureTimeout: 5000,
    singleRun: true,
    reportSlowerThan: 100
  });
};
