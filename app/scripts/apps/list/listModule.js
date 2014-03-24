define([
    'apps/list/listController'
], function (listController) {
    'use strict';
    var listModule;
    return {
        start: function (App) {
            listModule = App.module('MenuItemsApp.List');
            listModule.addInitializer(function () {
                listController.showView(App.vent, App.collections).on('addMenuItem', function (modalId) {
                    App.vent.trigger('UI:addMenuItem', modalId);
                });
            });
        }
    };
});