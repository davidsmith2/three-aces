define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'views/composite/openMenusList',
    'apps/private/threeaces.privateapp2',
    'apps/threeaces.layout2'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenusListView, privateApp2, Layout2) {
    'use strict';
    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('openMenu:add', this.onAddOpenMenu, this);
            privateAppVent.on('openMenu:edit', this.onEditOpenMenu, this);
            privateAppVent.on('openMenu:delete', this.onDeleteOpenMenu, this);
        },
        setData: function (openMenus) {
            this.openMenus = openMenus;
        },
        init: function (layout) {
            this._layout = layout;
            this.showOpenMenus();
        },
        showOpenMenus: function () {
            this._layout.main.show(new OpenMenusListView({
                collection: this.openMenus
            }));
        },
        onAddOpenMenu: function (openMenu) {
            var self = this;
            this.openMenus.create(openMenu, {
                success: function (model) {
                    self.onEditOpenMenu(model);
                }
            });
        },
        onEditOpenMenu: function (openMenu) {
            var self = this;
            openMenu.get('menus').fetch({
                success: function (menus) {
                    var layout2 = new Layout2();
                    privateApp2.setData({
                        openMenu: openMenu,
                        menus: menus
                    });
                    self._layout.main.show(layout2);
                    privateApp2.init(layout2);
                }
            });
        },
        onDeleteOpenMenu: function (openMenu) {
            openMenu.destroy();
        }
    });
    return new PrivateApp();
});
