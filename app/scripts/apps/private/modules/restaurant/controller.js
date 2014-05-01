define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/restaurant/views/form',
    'apps/private/modules/metadata',
    'views/generic/buttons',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, RestaurantView, metadata, ButtonsView, ScreenHeaderView) {
    'use strict';
    var RestaurantController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view.header = this.getViewHeader();
            this.view.content = this.getViewContent();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                header: this.view.header,
                content: this.view.content,
                footer: this.view.footer
            });
        },
        getViewHeader: function () {
            return new ScreenHeaderView({
                model: new Backbone.Model(metadata.restaurant)
            });
        },
        getViewContent: function () {
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
            vent.trigger('module:load', 'environment', {model: model});
        },
        onPrevious: function (model) {
            vent.trigger('module:load', 'openMenus', {collection: model.collection});
        }
    });
    return new RestaurantController();
});
