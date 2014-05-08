define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/modules/events',
    'layouts/module',
    'vents/layout',
    'vents/module',
    'views/nav/main'
], function (Backbone, Marionette, $, _, events, ModuleLayout, layoutVent, moduleVent, MainNavView) {
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
            var evt = events.handle(name, options),
                controller = router.controller;
            this.setLayout(new controller.relatedLayout());
            this.setEntity(controller, evt.entity);
            this.setRoute(router, evt.route);
        },
        setLayout: function (parentLayout) {
            layoutVent.trigger('layout:container:showView', 'main', parentLayout);
            parentLayout.body.show(new ModuleLayout());
            if (parentLayout.nav) {
                parentLayout.nav.show(new MainNavView());
            }
        },
        setEntity: function (controller, entity) {
            if (entity instanceof Backbone.Collection) {
                controller.collection = entity;
            } else {
                controller.model = entity;
            }
        },
        setRoute: function (router, route) {
            Backbone.history.fragment = null;
            router.navigate(route, {trigger: true});
        }
    });
    return new ModuleManager();
});