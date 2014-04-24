define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menu/views/form',
    'apps/private/routes',
    'apps/private/screenHeaders',
    'views/generic/buttons',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, MenuView, routes, screenHeaders, ButtonsView, ScreenHeaderView) {
    'use strict';
    var MenuController = Backbone.Marionette.Controller.extend({
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
                model: new Backbone.Model(screenHeaders.openMenus.screens.menus.screens.menu)
            });
        },
        getViewBody: function () {
            return new MenuView({
                model: this.model
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
            vent.trigger('module:next', routes.route('menuGroups', {model: model}));
        },
        onPrevious: function (model) {
            vent.trigger('module:previous', routes.route('menus', {model: model, collection: model.collection}));
        }
    });
    return new MenuController();
});
