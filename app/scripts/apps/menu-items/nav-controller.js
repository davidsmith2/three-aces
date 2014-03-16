define([
    'application',
    'apps/menu-items/nav-view'
], function (App, Nav) {
    'use strict';

    Nav = App.module('MenuItemsApp.Nav') || Nav;

    Nav.Controller = {
        displayNav: function () {
            App.navRegion.show(new App.MenuItemsApp.Nav.View());
        }
    };

    return Nav;

});