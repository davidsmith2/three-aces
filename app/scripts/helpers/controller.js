define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'views/buttons'
], function (Backbone, Marionette, $, _, vent, ButtonsView) {
    'use strict';
    var Controller = Backbone.Marionette.Controller.extend({
        initialize: function () {
        }
    });
    return Controller;
});
