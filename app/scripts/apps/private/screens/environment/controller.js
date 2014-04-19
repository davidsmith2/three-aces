define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/screens/environment/views/form'
], function (Backbone, Marionette, $, _, vent, EnvironmentView) {
    'use strict';
    var EnvironmentController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        initialize: function () {
            this.listenTo(vent, 'next:module', this.onNext);
            this.listenTo(vent, 'previous:module', this.onPrevious);
        },
        show: function () {
            this.view.body = this.getViewBody();
            vent.trigger('screen:show', {
                body: this.view.body
            });
        },
        getViewBody: function () {
            return new EnvironmentView({
                model: this.model.get('environment')
            });
        },
        onNext: function (model) {
            var menus = model.get('menus');
            menus.fetch({
                success: function (collection) {
                    vent.trigger('module:4:init', {
                        route: '!/openmenus/' + model.get('_id') + '/menus',
                        entity: collection
                    });
                }
            });
        },
        onPrevious: function (model) {
            console.log(model)
        }
    });
    return new EnvironmentController();
});
