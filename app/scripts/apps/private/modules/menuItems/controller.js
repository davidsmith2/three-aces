define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuItems/views/composite',
    'controllers/collection',
    'entities/models/menuItem',
    'layouts/dialog',
    'vents/layout'
], function (Backbone, Marionette, $, _, MenuItemsView, CollectionController, MenuItem, DialogLayout, layoutVent) {
    'use strict';
    var MenuItemsController = CollectionController.extend({
        relatedModel: MenuItem,
        relatedViews: {
            body: MenuItemsView
        },
        viewModels: {
            header: {
                title: 'Menu items',
                description: 'Add a new menu item or update an existing one.'
            },
            footer: {
                shortTitle: 'menuItems'
            }
        },
        onAddOrEdit: function () {
            console.log('hello')
        }
    });
    return new MenuItemsController();
});
