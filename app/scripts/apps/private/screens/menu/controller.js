define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/vent',
    'apps/private/screens/menu/views/form'
], function (Backbone, Marionette, $, _, vent, MenuView) {
    'use strict';
    var MenuController = Backbone.Marionette.Controller.extend({
        init: function (menu) {
            var view;
            this.menu = menu;
            view = new MenuView({
                model: this.menu
            });
            this.listenTo(view, 'menu:submit', this.onSubmit);
            return view;
        },
        onSubmit: function () {
            //vent.trigger('nextPage', this.menu);
        }
    });
    return new MenuController();
});
