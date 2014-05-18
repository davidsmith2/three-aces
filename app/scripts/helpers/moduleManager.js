define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'config/layouts',
    'config/routes',
    'vents/module',
    'vents/layout'
], function (Backbone, Marionette, $, _, layouts, routes, moduleVent, layoutVent) {
    var ModuleManager = Backbone.Marionette.Controller.extend({
        initialize: function () {
            this.listenTo(moduleVent, 'module:load', this.loadModule);
        },
        loadModule: function (name, options) {
            var self = this;
            require([
                'apps/private/modules/' + name + '/router'
            ], function (router) {
                self.onModuleLoad(name, options, router);
            });
        },
        onModuleLoad: function (name, options, router) {
            var route = routes.handle(name, options),
                controller = router.controller;
            this.setLayout(name, options);
            this.setEntity(controller, route.entity);
            this.setRoute(router, route.pathname);
        },
        setLayout: function (name, options) {
            layouts.handle(name, options);
        },
        setEntity: function (controller, entity) {
            if (entity instanceof Backbone.Collection) {
                controller.collection = entity;
            } else {
                controller.model = entity;
            }
        },
        setRoute: function (router, pathname) {

            console.log(pathname)

            Backbone.history.fragment = null;
            router.navigate(pathname, {trigger: true});
        }
    });
    return new ModuleManager();
});