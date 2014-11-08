define([
    'app',
    'apps/private/apps/menu_groups/list/list_view'
], function (App, View) {
    App.module('PrivateApp.MenuGroupsApp.List', function (List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            index: function (menu) {
                require([
                    'entities/menu_group'
                ], function () {

                    var layout = new View.Layout();

                    var panelView = new View.Panel({
                        model: menu
                    });

                    var fetchingMenuGroups = App.request('menuGroup:entities', menu);

                    $.when(fetchingMenuGroups).done(function (menuGroups) {

                        var listView = new View.MenuGroups({
                            collection: menuGroups
                        });

                        panelView.on('menuGroup:new', function () {
                            App.PrivateApp.MenuGroupsApp.trigger('menuGroup:new', menuGroups);
                        });

                        listView.on('itemview:menuGroup:show', function (itemView, options) {
                            App.PrivateApp.MenuGroupsApp.trigger('menuGroup:show', options.model);
                        });

                        listView.on('itemview:menuGroup:edit', function (itemView, options) {
                            App.PrivateApp.MenuGroupsApp.trigger('menuGroup:edit', options.model);
                        });

                        listView.on('itemview:menuGroup:delete', function (itemView, options) {
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

    return App.PrivateApp.MenuGroupsApp.List.Controller;

});