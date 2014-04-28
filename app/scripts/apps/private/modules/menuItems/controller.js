define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuItems/views/composite',
    'apps/private/routes',
    'apps/private/screenHeaders',
    'entities/models/menuItem',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, MenuItemsView, routes, screenHeaders, MenuItem, ScreenHeaderView) {
    'use strict';
    var MenuItemsController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:menuItem:add', this.onAdd, this);
            vent.on('ui:menuItem:edit', this.onEdit, this);
            vent.on('ui:menuItem:delete', this.onDelete, this);
        },
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
                model: new Backbone.Model(screenHeaders.openMenus.screens.menus.screens.menuGroups.screens.menuGroup.screens.menuItems)
            });
        },
        getViewBody: function () {
            return new MenuItemsView({
                collection: this.collection
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new MenuItem(), {
                success: function (model) {
                    self.onNext(model);
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            this.onNext(model);
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
            this.view.body.render();
        },
        onNext: function (model) {
            vent.trigger('module:next', routes.route('menuItem', {model: model}));
        }
    });
    return new MenuItemsController();
});
