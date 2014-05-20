define([
    'app',
    'apps/private/apps/open_menus/new/new_view'
], function (App, View) {
    App.module('PrivateApp.OpenMenusApp.New', function (New, App, Backbone, Marionette, $, _) {

        New.Controller = {
            index: function (openMenu) {
                var layout = new View.Layout({
                    model: openMenu
                });
                var restaurantView = new View.Form({
                    model: openMenu.get('restaurantInfo')
                });
                var environmentView = new View.Form({
                    model: openMenu.get('environment')
                });
                layout.on('show', function () {
                    this.restaurantRegion.show(restaurantView);
                    this.environmentRegion.show(environmentView);
                });
                layout.on('showMenusTabPane', function (options) {
                    require([
                        'apps/private/apps/menus/menus_app'
                    ], function () {
                        App.PrivateApp.OpenMenusApp.trigger('menus:list', options);
                    });
                });
                App.mainRegion.show(layout);
            }
        };
    });

    return App.PrivateApp.OpenMenusApp.New.Controller;

});