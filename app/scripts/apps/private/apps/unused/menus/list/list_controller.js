define([
    'app',
    'apps/private/apps/menus/list/list_view'
], function (App, View) {
    App.module('PrivateApp.MenusApp.List', function (List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            index: function (openMenu) {
                require([
                    'entities/menu'
                ], function () {

                    var layout = new View.Layout();

                    var panelView = new View.Panel({
                        model: openMenu
                    });

                    var fetchingMenus = App.request('menu:entities', openMenu);

                    $.when(fetchingMenus).done(function (menus) {

                        var listView = new View.Menus({
                            collection: menus
                        });

                        panelView.on('menu:new', function () {
                            App.PrivateApp.MenusApp.trigger('menu:new', menus);
                        });

                        listView.on('itemview:menu:show', function (itemView, options) {
                            App.PrivateApp.MenusApp.trigger('menu:show', options.model);
                        });

                        listView.on('itemview:menu:edit', function (itemView, options) {
                            App.PrivateApp.MenusApp.trigger('menu:edit', options.model);
                        });

                        listView.on('itemview:menu:delete', function (itemView, options) {
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

    return App.PrivateApp.MenusApp.List.Controller;

});