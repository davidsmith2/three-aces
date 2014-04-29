define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuGroups/views/composite',
    'apps/private/routes',
    'apps/private/screenHeaders',
    'entities/models/menuGroup',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, MenuGroupsView, routes, screenHeaders, MenuGroup, ScreenHeaderView) {
    'use strict';
    var MenuGroupsController = Backbone.Marionette.Controller.extend({
        collection: {},
        view: {},
        initialize: function () {
            vent.on('ui:menuGroup:add', this.onAdd, this);
            vent.on('ui:menuGroup:edit', this.onEdit, this);
            vent.on('ui:menuGroup:delete', this.onDelete, this);
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
                model: new Backbone.Model(screenHeaders.menuGroups)
            });
        },
        getViewBody: function () {
            return new MenuGroupsView({
                collection: this.collection
            });
        },
        getViewFooter: function () {
            return new Backbone.View();
        },
        onAdd: function () {
            var self = this;
            this.collection.create(new MenuGroup(), {
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
            vent.trigger('module:next', routes.route('menuGroup', {model: model}));
        }
    });
    return new MenuGroupsController();
});
