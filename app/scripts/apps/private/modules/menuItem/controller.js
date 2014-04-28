define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuItem/views/form',
    'apps/private/routes',
    'apps/private/screenHeaders',
    'views/generic/buttons',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, MenuItemView, routes, screenHeaders, ButtonsView, ScreenHeaderView) {
    'use strict';
    var MenuItemController = Backbone.Marionette.Controller.extend({
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
                model: new Backbone.Model(screenHeaders.openMenus.screens.menus.screens.menuGroups.screens.menuGroup.screens.menuItems.screens.menuItem)
            });
        },
        getViewBody: function () {
            return new MenuItemView({
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
            var menuItemSizes = model.get('menuItemSizes');
            menuItemSizes.fetch({
                success: function (collection) {
                    vent.trigger('module:next', routes.route('menuItemSizes', {model: model, collection: collection}));
                }
            });
        },
        onPrevious: function (model) {
            vent.trigger('module:previous', routes.route('menuItems', {model: model.get('menuGroup'), collection: model.collection}));
        }
    });
    return new MenuItemController();
});
