define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore'
], function (Backbone, Marionette, $, _) {
    'use strict';
    var Controller = Backbone.Marionette.Controller.extend({
        defaultRoute: function (path) {
            window.location.pathname = '#!/';
        },

    });
    return new Controller();
});
