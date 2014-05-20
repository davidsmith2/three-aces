define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuGroup/views/form',
    'controllers/model'
], function (Backbone, Marionette, $, _, MenuGroupView, ModelController) {
    'use strict';
    var MenuGroupController = ModelController.extend({
        relatedViews: {
            body: MenuGroupView
        },
        viewModels: {
            header: {
                title: 'Menu group',
                description: 'Add some information about your menu group.'
            },
            footer: {
                shortTitle: 'menuGroup'
            }
        }
    });
    return new MenuGroupController();
});
