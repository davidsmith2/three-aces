define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'views/composite/openMenus',
    'views/item/openMenuDetail'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenusView, OpenMenuDetailView) {
    'use strict';
    var PrivateApp = Backbone.Marionette.Controller.extend({
        initialize: function () {
            privateAppVent.on('openMenu:showDetail', this.onOpenMenuShowDetail, this);
/*
            privateAppVent.on('restaurant:add', this.onAddRestaurant, this);
            privateAppVent.on('restaurant:edit', this.onEditRestaurant, this);
            privateAppVent.on('restaurant:delete', this.onDeleteRestaurant, this);
            privateAppVent.on('restaurant:showDetail', this.onShowRestaurantDetail, this);
            privateAppVent.on('environment:edit', this.onEditEnvironment, this);
*/
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
            this.openMenusView = new OpenMenusView({
                collection: this.openMenus
            });
            this._layout.main.show(this.openMenusView);
        },
        onOpenMenuShowDetail: function (openMenu) {
            this.openMenuDetailView = new OpenMenuDetailView({
                model: openMenu
            });
            this._layout.main.show(this.openMenuDetailView);
        }
    });
    return new PrivateApp();
});
