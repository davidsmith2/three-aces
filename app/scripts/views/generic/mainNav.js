define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/mainNav',
    'helpers/vent'
], function (Backbone, Marionette, $, _, MainNavTmpl, vent) {
    'use strict';
	var MainNavView = Backbone.Marionette.ItemView.extend({
        template: MainNavTmpl,
        ui: {},
		events: {
            'click [href]': 'getModule'
        },
        getModule: function (e) {
            var $el = $(e.target),
                moduleName = $el.attr('href').slice(1);
            e.preventDefault();
            if (moduleName === 'menus') {
                this.getCollectionModule(moduleName, this.model);
            } else {
                this.getModelModule(moduleName, this.model);
            }
        },
        getModelModule: function (moduleName, model) {
            this.loadModule(moduleName, {model: model});
        },
        getCollectionModule: function (moduleName, model) {
            var collection = model.get(moduleName),
                self = this;
            collection.fetch({
                success: function (_collection) {
                    self.loadModule(moduleName, {
                        model: model,
                        collection: _collection
                    });
                }
            });
        },
        loadModule: function (moduleName, moduleOptions) {
            vent.trigger('module:load', moduleName, moduleOptions);
        }
	});
    return MainNavView;
});
