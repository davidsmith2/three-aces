define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'views/composite/restaurants',
    'views/item/addRestaurant',
    'views/composite/menuItemsPrivate',
    'views/item/addMenuItem',
    'views/item/toolbar',
    'entities/menuItem',
    'apps/private/threeaces.privateapp.vent',
    'entities/restaurant'
], function (Backbone, Marionette, $, _, RestaurantsView, AddRestaurantView, MenuItemsPrivateView, AddMenuItemView, ToolbarView, MenuItemModel, privateAppVent, RestaurantModel) {
    'use strict';

    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('restaurant:add', this.showAddRestaurantDialog, this);
            privateAppVent.on('menuItem:add', this.showAddMenuItemDialog, this);
            privateAppVent.on('menuItem:edit', this.showEditMenuItemDialog, this);
            privateAppVent.on('menuItem:delete', this.deleteMenuItem, this);
        },
        data: function (data) {
            this.restaurants = data.restaurants;
            this.menuItems = data.menuItems;
            this.menuItemSizes = data.menuItemSizes;
        },
        layout: function (layout) {
            this._layout = layout;

            var restaurantsView = new RestaurantsView({
                collection: this.restaurants
            });
            layout.main.show(restaurantsView);
/*
            var menuItemsPrivateView = new MenuItemsPrivateView({
                collection: this.menuItems
            });
            var toolbarView = new ToolbarView();
            layout.main.show(menuItemsPrivateView);
            layout.navigation.show(toolbarView);
*/
        },
        showAddRestaurantDialog: function (dialogId) {
            var addRestaurantView = new AddRestaurantView({
                collection: this.restaurants,
                model: new RestaurantModel(),
                dialogId: dialogId
            });
            this._layout.dialog.show(addRestaurantView);
        },
        showAddMenuItemDialog: function (dialogId) {
            var addMenuItemView = new AddMenuItemView({
                model: new MenuItemModel(),
                collections: {
                    menuItems: this.menuItems,
                    menuItemSizes: this.menuItemSizes
                },
                dialogId: dialogId
            });
            this._layout.dialog.show(addMenuItemView);
        },
        showEditMenuItemDialog: function (menuItem) {
            var editMenuItemView = new AddMenuItemView({
                model: menuItem,
                collections: {
                    menuItems: this.menuItems,
                    menuItemSizes: this.menuItemSizes
                },
                dialogId: '#addMenuItem'
            });
            this._layout.dialog.show(editMenuItemView);
        },
        deleteMenuItem: function (menuItem) {
            menuItem.destroy();
        }
    });
    return new PrivateApp();
});
