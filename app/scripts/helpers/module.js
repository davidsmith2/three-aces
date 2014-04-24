define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent'
], function (Backbone, Marionette, $, _, vent) {
    var Module = Backbone.Marionette.Controller.extend({
        name: '',
        router: {},
        initialize: function () {},
        wake: function (options) {
            this.entity = options.entity;
        }
    });
    return Module;
});