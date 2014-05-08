define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/environment/views/form',
    'controllers/model',
    'layouts/secondary'
], function (Backbone, Marionette, $, _, EnvironmentView, ModelController, SecondaryLayout) {
    'use strict';
    var EnvironmentController = ModelController.extend({
        relatedLayout: SecondaryLayout,
        relatedViews: {
            body: EnvironmentView
        },
        viewModels: {
            header: {
                title: 'Environment',
                description: 'Add some information about your restaurant\'s environment.',
                shortTitle: 'environment'
            }
        }
    });
    return new EnvironmentController();
});
