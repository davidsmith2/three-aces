define([
    'apps/menuItems/nav/navController'
], function (navController) {
    'use strict';
    var navModule;
    return {
        start: function (App) {
            navModule = App.module('MenuItemsApp.Nav');
            navModule.addInitializer(function () {
                navController.showView().on('navView:addMenuItem', function (modalId) {
                    App.vent.trigger('UI:addMenuItem', modalId);
                });
            });
        }
    };
});