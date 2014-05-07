define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/views/mainNav',
    'helpers/vent'
], function (Backbone, Marionette, $, _, MainNavTmpl, vent) {
    'use strict';
	var MainNavView = Backbone.Marionette.ItemView.extend({
        template: MainNavTmpl,
        ui: {},
		events: {
            'click [href]': 'select'
        },
        select: function (e) {
            var $el = $(e.target),
                moduleName = $el.attr('href').slice(1);
            e.preventDefault();
            if (moduleName === 'openMenus') {
                vent.trigger('openMenus:show');
            } else if (moduleName === 'menus') {
                this.selectCollection(moduleName);
            } else {
                this.selectModel(moduleName);
            }
        },
        selectCollection: function (moduleName) {
            var collection = this.model.get(moduleName),
                self = this;
            collection.fetch({
                success: function (_collection) {
                    self.load(moduleName, {
                        model: self.model,
                        collection: _collection
                    });
                }
            });
        },
        selectModel: function (moduleName) {
            this.load(moduleName, {model: this.model});
        },
        load: function (moduleName, moduleOptions) {
            vent.trigger('module:load', moduleName, moduleOptions);
        }
	});
    return MainNavView;
});
