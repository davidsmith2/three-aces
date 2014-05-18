define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/environment/views/form',
    'controllers/model'
], function (Backbone, Marionette, $, _, EnvironmentView, ModelController) {
    'use strict';
    var EnvironmentController = ModelController.extend({
        relatedViews: {
            body: EnvironmentView
        },
        viewModels: {
            header: {
                title: 'Environment',
                description: 'Add some information about your restaurant\'s environment.'
            },
            footer: {
                shortTitle: 'environment'
            }
        }
    });
    return new EnvironmentController();
});
