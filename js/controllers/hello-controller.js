define([
  'controllers/base/controller',
  'models/hello-world',
  'views/hello-world-view'
], function(Controller, HelloWorld, HelloWorldView) {
  'use strict';

  var HelloWorldController = Controller.extend({
    initialize: function(){

    },

    // Actions
    show: function(params) {
      this.model = new HelloWorld();
      this.view = new HelloWorldView({
        model: this.model,
        region: 'content'
      });
    }
  });

  return HelloWorldController;
});
