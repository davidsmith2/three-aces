define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/module',
    'hbs!tmpl/views/nav/main'
], function (Backbone, Marionette, $, _, moduleVent, Template) {
    'use strict';
	var MainNavView = Backbone.Marionette.ItemView.extend({
        template: Template,
        ui: {},
		events: {
            'click [href]': 'select'
        },
        select: function (e) {
            var $el = $(e.target),
                moduleName = $el.attr('href').slice(1),
                self = this;
            e.preventDefault();
            if (moduleName === 'menus') {
                var menus = this.model.get('menus');
                menus.fetch({
                    success: function (_menus) {
                        self.loadModule(moduleName, {
                            collection: _menus,
                            model: self.model
                        });
                    }
                });
            } else {
                this.loadModule(moduleName, {model: this.model});
            }
        },
        loadModule: function (moduleName, moduleOptions) {
            moduleVent.trigger('module:load', moduleName, moduleOptions);

        }
	});
    return MainNavView;
});
