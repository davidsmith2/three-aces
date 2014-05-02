define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/openMenus/views/composite',
    'apps/private/modules/metadata',
    'entities/models/openMenu',
    'views/generic/mainHeader',
    'layouts/secondary'
], function (Backbone, Marionette, $, _, vent, OpenMenusView, metadata, OpenMenu, MainHeaderView, SecondaryLayout) {
    'use strict';
    var OpenMenusController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:openMenu:add', this.onAdd, this);
            vent.on('ui:openMenu:edit', this.onEdit, this);
            vent.on('ui:openMenu:delete', this.onDelete, this);
        },
        show: function () {
            this.view.header = this.getViewHeader();
            this.view.content = this.getViewContent();
            this.view.footer = this.getViewFooter();
            vent.trigger('module:change', {
                header: this.view.header,
                content: this.view.content,
                footer: this.view.footer
            });
        },
        getViewHeader: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.openMenus)
            });
        },
        getViewContent: function () {
            return new OpenMenusView({
                collection: this.collection
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new OpenMenu(), {
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
            vent.trigger('layout:change', 'main', new SecondaryLayout());
            vent.trigger('module:load', 'restaurant', {model: model});
        }
    });
    return new OpenMenusController();
});
