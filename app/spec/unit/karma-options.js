module.exports = function(config){
  config.set({

    basePath : '../../../',

    files : [
      'vendor/angular/angular.js',
      'vendor/angular-route/angular-route.js',
      'vendor/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'app/spec/unit/**/*Spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    reporters: ['progress']

  });
};
