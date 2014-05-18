define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/openMenus/views/composite',
    'controllers/collection',
    'entities/models/openMenu',
    'vents/module',
    'vents/ui'
], function (Backbone, Marionette, $, _, OpenMenusView, CollectionController, OpenMenu, moduleVent, uiVent) {
    'use strict';
    var OpenMenusController = CollectionController.extend({
        collection: {},
        relatedModel: OpenMenu,
        relatedViews: {
            body: OpenMenusView
        },
        viewModels: {
            header: {
                title: 'Open menus',
                description: 'Add a new open menu or update an existing one.'
            },
            footer: {
                shortTitle: 'openMenus'
            }
        },
        initialize: function () {
            this.listenTo(uiVent, 'ui:openMenu:add', this.onAdd);
            this.listenTo(uiVent, 'ui:openMenu:edit', this.onEdit);
            this.listenTo(uiVent, 'ui:openMenu:delete', this.onDelete);
        },
        onAddOrEdit: function (openMenu) {
            moduleVent.trigger('module:load', 'restaurant', {model: openMenu});
        }
    });
    return new OpenMenusController();
});
