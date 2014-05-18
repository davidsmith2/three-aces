define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/module'
], function (Backbone, Marionette, $, _, BaseLayout, moduleVent) {
    'use strict';
    var NavLayout = BaseLayout.extend({
        loadModelBasedModule: function (moduleName) {
            this.loadModule(moduleName, {model: this.model});
        },
        loadCollectionBasedModule: function (moduleName) {
            var collection = this.model.get(moduleName),
                self = this;
            collection.fetch({
                success: function (_collection) {
                    self.loadModule(moduleName, {
                        collection: _collection,
                        model: self.model
                    });
                }
            });
        },
        loadModule: function (moduleName, moduleOptions) {
            moduleVent.trigger('module:load', moduleName, moduleOptions);
        }
    });
    return NavLayout;
});
