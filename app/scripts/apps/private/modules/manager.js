define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/events'
], function (Backbone, Marionette, $, _, vent, events) {
    var ModuleManager = Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.listenTo(vent, 'module:load', this.loadModule);
        },
        loadModule: function (moduleName, moduleOptions) {
            var self = this;
            require([
                'apps/private/modules/' + moduleName + '/router'
            ], function (moduleRouter) {
                self.onModuleLoad(moduleName, moduleOptions, moduleRouter);
            });
        },
        onModuleLoad: function (moduleName, moduleOptions, moduleRouter) {
            var evt = events.handle(moduleName, moduleOptions);
            if (evt.entity instanceof Backbone.Collection) {
                moduleRouter.controller.collection = evt.entity;
            } else {
                moduleRouter.controller.model = evt.entity;
            }
            Backbone.history.fragment = null;
            moduleRouter.navigate(evt.route, {trigger: true});
        }
    });
    return new ModuleManager();
});