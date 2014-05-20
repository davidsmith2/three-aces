define([
    'app',
    'apps/private/apps/menus/list/list_view'
], function (App, View) {
    App.module('PrivateApp.MenusApp.List', function (List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            index: function (options) {
                require([
                    'entities/menu'
                ], function () {

                    var openMenu = options.model;

                    var menusRegion = options.view.menusRegion;

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
                            console.log('menu:new')
                        });

                        listView.on('itemview:menu:show', function () {
                            console.log('itemview:menu:show')
                        });

                        listView.on('itemview:menu:edit', function () {
                            console.log('itemview:menu:edit')
                        });

                        listView.on('itemview:menu:delete', function () {
                            console.log('itemview:menu:delete')
                        });

                        layout.on('show', function () {
                            this.panelRegion.show(panelView);
                            this.listRegion.show(listView);
                        });

                        menusRegion.show(layout);

                    });

                });
            }
        };
    });

    return App.PrivateApp.MenusApp.List.Controller;

});