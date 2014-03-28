define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'views/menuItemsPrivate',
    'views/addMenuItem',
    'views/toolbar',
    'entities/menuItem',
    'apps/private/threeaces.privateapp.vent'
], function (Backbone, Marionette, $, _, MenuItemsPrivateView, AddMenuItemView, ToolbarView, MenuItemModel, privateAppVent) {
    'use strict';

    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('menuItem:add', this.showDialog, this);
        },
        data: function (data) {
            this.menuItems = data.menuItems;
            this.menuItemSizes = data.menuItemSizes;
        },
        layout: function (layout) {
            this._layout = layout;
            var menuItemsPrivateView = new MenuItemsPrivateView({
                collection: this.menuItems
            });
            var toolbarView = new ToolbarView();
            layout.main.show(menuItemsPrivateView);
            layout.navigation.show(toolbarView);
        },
        showDialog: function (dialogId) {
            var addMenuItemView = new AddMenuItemView({
                model: new MenuItemModel(),
                collections: {
                    menuItems: this.menuItems,
                    menuItemSizes: this.menuItemSizes
                },
                dialogId: dialogId
            });
            this._layout.dialog.show(addMenuItemView);
        }
    });
    return new PrivateApp();
});
