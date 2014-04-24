define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/restaurant/views/form',
    'apps/private/routes',
    'views/generic/buttons',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, RestaurantView, routes, ButtonsView, ScreenHeaderView) {
    'use strict';
    var RestaurantController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view.header = this.getViewHeader();
            this.view.body = this.getViewBody();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                header: this.view.header,
                body: this.view.body,
                footer: this.view.footer
            });
        },
        getViewHeader: function () {
            return new ScreenHeaderView({
                model: new Backbone.Model({
                    title: 'Add restaurant info',
                    description: 'This page allows you to add some information about your restaurant.'
                })
            });
        },
        getViewBody: function () {
            return new RestaurantView({
                model: this.model.get('restaurantInfo')
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
            vent.trigger('module:next', routes.route('environment', {model: model}));
        },
        onPrevious: function (model) {
            vent.trigger('module:previous', routes.route('openMenus', {collection: model.collection}));
        }
    });
    return new RestaurantController();
});
