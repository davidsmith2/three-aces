define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/screens/environment/views/form'
], function (Backbone, Marionette, $, _, vent, EnvironmentView) {
    'use strict';
    var EnvironmentController = Backbone.Marionette.Controller.extend({
        init: function (openMenu) {
            var view;
            this.openMenu = openMenu;
            this.environment = this.openMenu.get('environment');
            view = new EnvironmentView({
                model: this.environment
            });
            this.listenTo(view, 'environment:submit', this.onSubmit);
            return view;
        },
        onSubmit: function () {
            vent.trigger('nextScreen', this.openMenu);
        }
    });
    return new EnvironmentController();
});
