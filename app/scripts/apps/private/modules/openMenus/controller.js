define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/openMenus/views/composite',
    'controllers/collection',
    'entities/models/openMenu',
    'vents/module'
], function (Backbone, Marionette, $, _, OpenMenusView, CollectionController, OpenMenu, moduleVent) {
    'use strict';
    var OpenMenusController = CollectionController.extend({
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
        onAddOrEdit: function (openMenu) {
            moduleVent.trigger('module:load', 'restaurant', {model: openMenu});
        }
    });
    return new OpenMenusController();
});
