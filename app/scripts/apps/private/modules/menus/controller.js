define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menus/views/composite',
    'controllers/collection',
    'entities/models/menu',
    'vents/module',
    'vents/ui'
], function (Backbone, Marionette, $, _, MenusView, CollectionController, Menu, moduleVent, uiVent) {
    'use strict';
    var MenusController = CollectionController.extend({
        collection: {},
        relatedModel: Menu,
        relatedViews: {
            body: MenusView
        },
        viewModels: {
            header: {
                title: 'Menus',
                description: 'Add a new menu or update an existing one.'
            },
            footer: {
                shortTitle: 'menus'
            }
        },
        initialize: function () {
            this.listenTo(uiVent, 'ui:menu:add', this.onAdd);
            this.listenTo(uiVent, 'ui:menu:edit', this.onEdit);
            this.listenTo(uiVent, 'ui:menu:delete', this.onDelete);
        },
        onAddOrEdit: function (model) {
            moduleVent.trigger('module:load', 'menuInfo', {model: model});
        }
    });
    return new MenusController();
});
