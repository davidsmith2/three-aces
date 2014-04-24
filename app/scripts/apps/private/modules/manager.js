define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/router',
    'helpers/vent'
], function (Backbone, Marionette, $, _, AppRouter, vent) {
    var ModuleManager = Backbone.Marionette.Controller.extend({
        current: 0,
        modules: {},
        moduleNames: ['openMenus', 'restaurant', 'environment', 'menus', 'menu'],
        initialize: function () {
            this.listenTo(vent, 'module:first', this.getFirstModule);
            this.listenTo(vent, 'module:next', this.getNextModule);
            this.listenTo(vent, 'module:previous', this.getPreviousModule);
        },
        getFirstModule: function (options) {
            this.loadModule(0, options);
        },
        getNextModule: function (options) {
            if (this.current < this.moduleNames.length - 1) {
                this.loadModule(++this.current, options);
            }
        },
        getPreviousModule: function (options) {
            if (this.current > 0) {
                this.loadModule(--this.current, options);
            }
        },
        loadModule: function (index, options) {
            var moduleName = this.moduleNames[index],
                self = this;
            require([
                'apps/private/modules/' + moduleName + '/controller'
            ], function (controller) {
                self.onModuleLoad(controller, options);
            });
        },
        onModuleLoad: function (controller, options) {

            console.log(options.route)

            var appRouter;
            if (options.entity instanceof Backbone.Collection) {
                controller.collection = options.entity;
            } else {
                controller.model = options.entity;
            }
            appRouter = new AppRouter({
                controller: controller
            });
            Backbone.history.fragment = null;
            appRouter.navigate(options.route, {trigger: true});
        }
    });
    return new ModuleManager();
});