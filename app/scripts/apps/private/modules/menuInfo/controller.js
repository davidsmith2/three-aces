define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/menuInfo/views/form',
    'controllers/model'
], function (Backbone, Marionette, $, _, MenuInfoView, ModelController) {
    'use strict';
    var MenuInfoController = ModelController.extend({
        relatedViews: {
            body: MenuInfoView
        },
        viewModels: {
            header: {
                title: 'Menu info',
                description: 'Add some general information about your menu.'
            },
            footer: {
                shortTitle: 'menuInfo'
            }
        }
    });
    return new MenuInfoController();
});
