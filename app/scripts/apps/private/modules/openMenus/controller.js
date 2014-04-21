define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/openMenus/views/composite',
    'entities/models/openMenu'
], function (Backbone, Marionette, $, _, vent, OpenMenusView, OpenMenu) {
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
            this.view.body = this.getViewBody();
            vent.trigger('screen:show', {
                body: this.view.body
            });
        },
        getViewBody: function () {
            return new OpenMenusView({
                collection: this.collection
            });
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
            vent.trigger('module2:start', {
                model: model,
                route: '!/openmenus/' + model.get('_id') + '/edit/restaurant'
            });
        }
    });
    return new OpenMenusController();
});