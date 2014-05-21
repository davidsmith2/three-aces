define([
    'app',
    'apps/private/apps/open_menus/list/list_view'
], function (App, View) {
    App.module('PrivateApp.OpenMenusApp.List', function (List, App, Backbone, Marionette, $, _) {

        List.Controller = {
            index: function () {
                require([
                    'entities/open_menu'
                ], function () {

                    var layout = new View.Layout();

                    var panelView = new View.Panel();

                    var fetchingOpenMenus = App.request('openMenu:entities');

                    $.when(fetchingOpenMenus).done(function (openMenus) {

                        var listView = new View.OpenMenus({
                            collection: openMenus
                        });

                        panelView.on('openMenu:new', function () {
                            App.PrivateApp.OpenMenusApp.trigger('openMenu:new', openMenus);
                        });

                        listView.on('itemview:openMenu:show', function (itemView, options) {
                            console.log('showing open menu')
                        });

                        listView.on('itemview:openMenu:edit', function (itemView, options) {
                            App.PrivateApp.OpenMenusApp.trigger('openMenu:edit', options);
                        });

                        listView.on('itemview:openMenu:delete', function (itemView, options) {
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

    return App.PrivateApp.OpenMenusApp.List.Controller;

});