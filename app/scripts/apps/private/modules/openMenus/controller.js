define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/openMenus/views/composite',
    'controllers/collection',
    'entities/models/openMenu',
    'layouts/primary',
    'vents/module'
], function (Backbone, Marionette, $, _, OpenMenusView, CollectionController, OpenMenu, PrimaryLayout, moduleVent) {
    'use strict';
    var OpenMenusController = CollectionController.extend({
        relatedLayout: PrimaryLayout,
        relatedModel: OpenMenu,
        relatedViews: {
            body: OpenMenusView
        },
        viewModels: {
            header: {
                title: 'Open menus',
                description: 'Add a new open menu or update an existing one.',
                shortTitle: 'openMenus'
            }
        },
        onAddOrEdit: function (model) {
            moduleVent.trigger('module:load', 'restaurant', {model: model});
        }
    });
    return new OpenMenusController();
});
