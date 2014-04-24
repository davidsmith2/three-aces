define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/environment/views/form',
    'apps/private/routes',
    'views/generic/buttons'
], function (Backbone, Marionette, $, _, vent, EnvironmentView, routes, ButtonsView) {
    'use strict';
    var EnvironmentController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view.body = this.getViewBody();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                body: this.view.body,
                footer: this.view.footer
            });
        },
        getViewBody: function () {
            return new EnvironmentView({
                model: this.model.get('environment')
            });
        },
        getViewFooter: function () {
            var view = new ButtonsView({
                model: this.model
            });
            this.listenTo(view, 'next', this.onNext);
            this.listenTo(view, 'previous', this.onPrevious);
            return view;
        },
        onNext: function (model) {
            var menus = model.get('menus');
            menus.fetch({
                success: function (collection) {
                    vent.trigger('module:next', routes.route('menus', {
                        model: model,
                        collection: collection
                    }));
                }
            });
        },
        onPrevious: function (model) {
            vent.trigger('module:previous', routes.route('restaurant', {model: model}));
        }
    });
    return new EnvironmentController();
});
