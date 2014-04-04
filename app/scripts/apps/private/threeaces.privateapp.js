define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'views/composite/openMenusList',
    'views/item/openMenuDetail'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenusListView, OpenMenuDetailView) {
    'use strict';
    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('openMenu:add', this.onOpenMenuAdd, this);
            privateAppVent.on('openMenu:edit', this.onOpenMenuEdit, this);
            privateAppVent.on('openMenu:delete', this.onOpenMenuDelete, this);
        },
        setData: function (data) {
            this.openMenus = data.openMenus;
            this.restaurants = data.restaurants;
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
                wait: true,
                success: function (model) {
                    model.get('restaurantInfo').set('openMenu', model.get('_id'));
                    self.onOpenMenuEdit({
                        model: model
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
        }
    });
    return new PrivateApp();
});
