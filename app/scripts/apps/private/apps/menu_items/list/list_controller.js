define([
    'app',
    'apps/private/apps/menu_items/list/list_view'
], function (App, View) {
    App.module('PrivateApp.MenuItemsApp.List', function (List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            index: function (menuGroup) {
                require([
                    'entities/menu_item'
                ], function () {

                    var layout = new View.Layout();

                    var panelView = new View.Panel({
                        model: menuGroup
                    });

                    var fetchingMenuItems = App.request('menuItem:entities', menuGroup);

                    $.when(fetchingMenuItems).done(function (menuItems) {

                        var listView = new View.MenuItems({
                            collection: menuItems
                        });

                        panelView.on('menuItem:new', function () {
                            App.PrivateApp.MenuItemsApp.trigger('menuItem:new', menuItems);
                        });

                        listView.on('itemview:menuItem:show', function (itemView, options) {
                            App.PrivateApp.MenuItemsApp.trigger('menuItem:show', options.model);
                        });

                        listView.on('itemview:menuItem:edit', function (itemView, options) {
                            App.PrivateApp.MenuItemsApp.trigger('menuItem:edit', options.model);
                        });

                        listView.on('itemview:menuItem:delete', function (itemView, options) {
                            options.model.destroy();
                        });

                        layout.on('show', function () {
                            this.panelRegion.show(panelView);
                            this.listRegion.show(listView);
                        });

                        App.mainRegion.show(layout);

                    });

                });
            }
        };
    });

    return App.PrivateApp.MenuItemsApp.List.Controller;

});