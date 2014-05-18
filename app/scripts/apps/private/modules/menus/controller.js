define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menus/views/composite',
    'controllers/collection',
    'entities/models/menu',
    'vents/module'
], function (Backbone, Marionette, $, _, MenusView, CollectionController, Menu, moduleVent) {
    'use strict';
    var MenusController = CollectionController.extend({
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
        onAddOrEdit: function (model) {
            moduleVent.trigger('module:load', 'menuInfo', {model: model});
        }
    });
    return new MenusController();
});
