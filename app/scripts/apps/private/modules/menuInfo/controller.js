define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuInfo/views/form',
    'helpers/vent'
], function (Backbone, Marionette, $, _, MenuInfoView, vent) {
    'use strict';
    var MenuInfoController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view = new MenuInfoView({
                model: this.model
            });
            vent.trigger('layout:menu:tabs:showView', 'menuInfo', this.view);
        }
    });
    return new MenuInfoController();
});
