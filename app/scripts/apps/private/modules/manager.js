define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent'
], function (Backbone, Marionette, $, _, vent) {
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
                'apps/private/modules/' + moduleName + '/router'
            ], function (router) {
                self.onModuleLoad(router, options);
            });
        },
        onModuleLoad: function (router, options) {
            if (options.entity instanceof Backbone.Collection) {
                router.controller.collection = options.entity;
            } else {
                router.controller.model = options.entity;
            }
            Backbone.history.fragment = null;
            router.navigate(options.route, {trigger: true});
        }
    });
    return new ModuleManager();
});