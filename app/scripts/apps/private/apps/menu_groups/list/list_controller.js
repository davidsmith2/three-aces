define([
    'app',
    'apps/private/apps/menu_groups/list/list_view'
], function (App, View) {
    App.module('PrivateApp.MenusApp.List', function (List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            index: function (options) {
                require([
                    'entities/menu_group'
                ], function () {

                    var menu = options.model;

                    var menuGroupsRegion = options.view.menuGroupsRegion;

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
                            App.PrivateApp.MenuGroupsApp.trigger('menuGroup:new', {
                                collection: menuGroups,
                                region: menuGroupsRegion
                            });
                        });

                        listView.on('itemview:menuGroup:show', function () {
                            console.log('itemview:menu:show')
                        });

                        listView.on('itemview:menuGroup:edit', function (itemView, options) {
                            App.PrivateApp.MenuGroupsApp.trigger('menuGroup:edit', {
                                model: options.model,
                                region: menuGroupsRegion
                            });
                        });

                        listView.on('itemview:menu:delete', function (itemView, options) {
                            options.model.destroy();
                        });

                        layout.on('show', function () {
                            this.panelRegion.show(panelView);
                            this.listRegion.show(listView);
                        });

                        menuGroupsRegion.show(layout);

                    });

                });
            }
        };
    });

    return App.PrivateApp.MenusApp.List.Controller;

});