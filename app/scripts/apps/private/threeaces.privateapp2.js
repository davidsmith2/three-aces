define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'views/forms/restaurant',
    'views/forms/environment',
    'views/composite/menusList',
    'views/layout/dialog',
    'views/generic/dialogTitle',
    'views/forms/menu'
], function (Backbone, Marionette, $, _, privateAppVent, RestaurantForm, EnvironmentForm, MenusListView, DialogLayout, DialogTitleView, MenuForm) {
    'use strict';
    var PrivateApp2 = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('menu:add', this.onAddMenu, this);
            privateAppVent.on('menu:edit', this.onEditMenu, this);
            privateAppVent.on('menu:delete', this.onDeleteMenu, this);
        },
        setData: function (data) {
            this.openMenu = data.openMenu;
            this.menus = data.menus;
        },
        init: function (layout) {
            this._layout = layout;
            this.showRestaurant(layout.top);
            this.showEnvironment(layout.middle);
            this.showMenus(layout.bottom);
        },
        showRestaurant: function (region) {
            region.show(new RestaurantForm({
                model: this.openMenu.get('restaurantInfo')
            }));
        },
        showEnvironment: function (region) {
            region.show(new EnvironmentForm({
                model: this.openMenu.get('environment')
            }));
        },
        showMenus: function (region) {
            region.show(new MenusListView({
                collection: this.menus
            }));
        },
        onAddMenu: function (menu) {
            var self = this;
            this.menus.create(menu, {
                success: function (model) {
                    self.onEditMenu(model);
                }
            });
        },
        onEditMenu: function (menu) {
            this._layout.dialog.show(new DialogLayout({
                title: '<h2>Menu</h2>',
                body: new MenuForm({
                    model: menu
                })
            }));
        },
        onDeleteMenu: function (menu) {
            menu.destroy();
        }
    });
    return new PrivateApp2();
});
