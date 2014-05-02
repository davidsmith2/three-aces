define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menus/views/composite',
    'entities/models/menu',
    'apps/private/modules/metadata',
    'views/generic/mainHeader',
    'views/generic/mainNav'
], function (Backbone, Marionette, $, _, vent, MenusView, Menu, metadata, MainHeaderView, MainNavView) {
    'use strict';
    var MenusController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:menu:add', this.onAdd, this);
            vent.on('ui:menu:edit', this.onEdit, this);
            vent.on('ui:menu:delete', this.onDelete, this);
        },
        show: function () {
            this.view.nav = this.getViewNav();
            this.view.header = this.getViewHeader();
            this.view.content = this.getViewContent();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                nav: this.view.nav,
                header: this.view.header,
                content: this.view.content,
                footer: this.view.footer
            });
        },
        getViewNav: function () {
            return new MainNavView({
                model: this.collection.openMenu
            });
        },
        getViewHeader: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.menus)
            });
        },
        getViewContent: function () {
            return new MenusView({
                collection: this.collection
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new Menu(), {
                success: function (model) {
                    self.onNext(model);
                }
            });
        },
        onEdit: function (id) {
            var model = this.collection.get(id);
            this.onNext(model);
        },
        onDelete: function (id) {
            var model = this.collection.get(id);
            model.destroy();
        }
    });
    return new MenusController();
});
