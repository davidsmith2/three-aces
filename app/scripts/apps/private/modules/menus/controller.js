define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menus/views/composite',
    'controllers/collection',
    'entities/models/menu',
    'layouts/secondary',
    'vents/module'
], function (Backbone, Marionette, $, _, MenusView, CollectionController, Menu, SecondaryLayout, moduleVent) {
    'use strict';
    var MenusController = CollectionController.extend({
        relatedLayout: SecondaryLayout,
        relatedModel: Menu,
        relatedViews: {
            body: MenusView
        },
        viewModels: {
            header: {
                title: 'Menus',
                description: 'Add a new menu or update an existing one.',
                shortTitle: 'menus'
            }
        },
        onAddOrEdit: function (model) {
            moduleVent.trigger('module:load', 'menu', {model: model});
        }
    });
    return new MenusController();
});
