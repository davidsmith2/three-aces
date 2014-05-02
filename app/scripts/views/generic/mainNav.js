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
            var moduleName = $(e.target).attr('href').slice(1);
            e.preventDefault();
            if (moduleName === 'menus') {
                this.getCollectionModule(moduleName, this.model);
            } else {
                this.getModelModule(moduleName, this.model);
            }
        },
        getModelModule: function (moduleName, model) {
            vent.trigger('module:load', moduleName, {model: model});
        },
        getCollectionModule: function (moduleName, model) {
            var collection = model.get(moduleName);
            collection.fetch({
                success: function (_collection) {
                    vent.trigger('module:load', moduleName, {
                        model: collection.openMenu,
                        collection: _collection
                    });
                }
            });
        }
	});
    return MainNavView;
});
