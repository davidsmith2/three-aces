define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/environment/views/form',
    'views/generic/buttons'
], function (Backbone, Marionette, $, _, vent, EnvironmentView, ButtonsView) {
    'use strict';
    var EnvironmentController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        initialize: function () {
            this.listenTo(vent, 'next:module', this.onNext);
            this.listenTo(vent, 'previous:module', this.onPrevious);
        },
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
            return new ButtonsView({
                model: this.model
            });
        },
        onNext: function (model) {
            var menus = model.get('menus');
            menus.fetch({
                success: function (collection) {
                    vent.trigger('module4:start', {
                        collection: collection,
                        route: '!/openmenus/' + model.get('_id') + '/menus'
                    });
                }
            });
        },
        onPrevious: function (model) {
            vent.trigger('module2:start', {
                model: model,
                route: '!/openmenus/' + model.get('_id') + '/edit/restaurant'
            });
        }
    });
    return new EnvironmentController();
});
