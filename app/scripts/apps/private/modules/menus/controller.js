define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menus/views/composite',
    'entities/models/menu',
    'apps/private/modules/metadata',
    'views/mainHeader',
    'views/mainNav',
    'layouts/secondary'
], function (Backbone, Marionette, $, _, vent, MenusView, Menu, metadata, MainHeaderView, MainNavView, SecondaryLayout) {
    'use strict';
    var MenusController = Backbone.Marionette.Controller.extend({
        collection: {},
        views: {
            nav: {},
            header: {},
            body: {},
            footer: {}
        },
        initialize: function () {
            vent.on('ui:menu:add', this.onAdd, this);
            vent.on('ui:menu:edit', this.onEdit, this);
            vent.on('ui:menu:delete', this.onDelete, this);
        },
        show: function () {
            this.views.nav = this.getNavView();
            this.views.header = this.getHeaderView();
            this.views.body = this.getBodyView();
            this.views.footer = this.getFooterView();
            vent.trigger('layout:secondary:showViews', this.views);
        },
        getNavView: function () {
            return new MainNavView({
                model: this.collection.openMenu
            });
        },
        getHeaderView: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.menus)
            });
        },
        getBodyView: function () {
            return new MenusView({
                collection: this.collection
            });
        },
        getFooterView: function () {
            return new Backbone.View();
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new Menu(), {
                success: function (model) {
                    self.changeModule(model);
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            this.changeModule(model);
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
        },
        changeModule: function (model) {
            vent.trigger('layout:container:showView', 'main', new SecondaryLayout());
            vent.trigger('module:load', 'menu', {model: model});
        }
    });
    return new MenusController();
});
