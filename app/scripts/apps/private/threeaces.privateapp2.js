define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'screens/restaurant/views/form',
    'screens/environment/views/form',
    'screens/menus/views/composite',
    'screens/menu/views/form',
    'layouts/dialog'
], function (Backbone, Marionette, $, _, privateAppVent, RestaurantView, EnvironmentView, MenusView, MenuView, DialogLayout) {
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
            region.show(new RestaurantView({
                model: this.openMenu.get('restaurantInfo')
            }));
        },
        showEnvironment: function (region) {
            region.show(new EnvironmentView({
                model: this.openMenu.get('environment')
            }));
        },
        showMenus: function (region) {
            region.show(new MenusView({
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
                body: new MenuView({
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
