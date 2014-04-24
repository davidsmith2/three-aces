define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/openMenus/views/composite',
    'apps/private/routes',
    'entities/models/openMenu',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, OpenMenusView, routes, OpenMenu, ScreenHeaderView) {
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
            this.view.body = this.getViewBody();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                header: this.view.header,
                body: this.view.body,
                footer: this.view.footer
            });
        },
        getViewHeader: function () {
            return new ScreenHeaderView({
                model: new Backbone.Model({
                    title: 'Open Menus',
                    description: 'This page allows you to add new open menus and see the open menus you\'ve already added.'
                })
            });
        },
        getViewBody: function () {
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
            this.view.body.render();
        },
        onNext: function (model) {
            vent.trigger('module:next', routes.route('restaurant', {model: model}));
        }
    });
    return new OpenMenusController();
});
