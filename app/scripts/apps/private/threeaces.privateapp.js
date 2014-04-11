define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/dialogLayout',
    'apps/private/threeaces.privateapp.vent',
    'views/composite/openMenusList',
    'views/item/openMenuDetail',
    'views/item/dialogTitle'
], function (Backbone, Marionette, $, _, DialogLayout, privateAppVent, OpenMenusListView, OpenMenuDetailView, DialogTitleView) {
    'use strict';
    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('openMenu:add', this.onOpenMenuAdd, this);
            privateAppVent.on('openMenu:edit', this.onOpenMenuEdit, this);
            privateAppVent.on('openMenu:delete', this.onOpenMenuDelete, this);
            privateAppVent.on('ui:menu:edit', this.onMenuEdit, this);
        },
        setData: function (openMenus) {
            this.openMenus = openMenus;
        },
        init: function (layout) {
            this._layout = layout;
            this.showOpenMenus();
        },
        showOpenMenus: function () {
            this.openMenusListView = new OpenMenusListView({
                collection: this.openMenus
            });
            this._layout.main.show(this.openMenusListView);
        },
        onOpenMenuAdd: function (options) {
            var self = this;
            this.openMenus.create(options.model, {
                success: function (openMenu) {
                    self.onOpenMenuEdit({
                        model: openMenu
                    });
                }
            });
        },
        onOpenMenuEdit: function (options) {
            this.openMenuDetailView = new OpenMenuDetailView({
                model: options.model
            });
            this._layout.main.show(this.openMenuDetailView);
        },
        onOpenMenuDelete: function (options) {
            options.model.destroy();
        },
        onMenuEdit: function (dialogBody) {
            var dialogTitle = new DialogTitleView({
                tagName: 'h2',
                model: new Backbone.Model({
                    title: 'Add a menu'
                })
            });
            var dialogLayout = new DialogLayout({
                views: {
                    title: dialogTitle,
                    body: dialogBody
                }
            });
            this._layout.dialog.show(dialogLayout);
        }
    });
    return new PrivateApp();
});
