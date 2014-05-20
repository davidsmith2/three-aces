define([
    'app',
    'apps/private/apps/open_menus/list/list_view'
], function (App, View) {
    App.module('PrivateApp.OpenMenusApp.List', function (List, App, Backbone, Marionette, $, _) {

        var onNewOrEdit = function (openMenu) {
            require([
                'apps/private/apps/open_menus/new/new_controller'
            ], function (NewController) {
                NewController.index(openMenu);
            });
        };

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
                            var fetchingOpenMenu = App.request('openMenu:entity:new');
                            $.when(fetchingOpenMenu).done(function (unsavedOpenMenu) {
                                openMenus.create(unsavedOpenMenu, {
                                    success: function (savedOpenMenu) {
                                        onNewOrEdit(savedOpenMenu);
                                    }
                                });
                            });
                        });

                        listView.on('itemview:openMenu:show', function (itemView, options) {
                            console.log('showing open menu')
                        });

                        listView.on('itemview:openMenu:edit', function (itemView, options) {
                            onNewOrEdit(options.model);
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