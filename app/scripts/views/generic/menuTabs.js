define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/menuTabs'
], function (Backbone, Marionette, $, _, Template) {
    'use strict';
	var MenuTabsView = Backbone.Marionette.ItemView.extend({
        template: Template
	});
    return MenuTabsView;
});
