define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore'
], function (Backbone, Marionette, $, _) {
    var ModuleManager = Backbone.Marionette.Controller.extend({
        modules: [
            {
                name: 'openMenus',
                path: 'apps/private/modules/openMenus/module',
                "export": {}
            },
            {
                name: 'restaurant',
                path: 'apps/private/modules/restaurant/module',
                "export": {}
            },
            {
                name: 'environment',
                path: 'apps/private/modules/environment/module',
                "export": {}
            },
            {
                name: 'menus',
                path: 'apps/private/modules/menus/module',
                "export": {}
            }
        ],
        initialize: function () {
            _.each(this.modules, this.loadModule);
        },
        wake: function () {
            _.each(this.modules, this.wakeModule);
        },
        loadModule: function (curModule) {
            require([
                curModule.path
            ], function (module) {
                curModule["export"] = module;
            });
        },
        wakeModule: function (curModule) {
            curModule["export"].wake();
        }
    });
    return new ModuleManager();
});