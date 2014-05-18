define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/layout',
    'hbs!tmpl/layouts/openMenus'
], function (Backbone, Marionette, $, _, BaseLayout, layoutVent, Template) {
    'use strict';
    var OpenMenusLayout = BaseLayout.extend({
        type: 'openMenus',
        template: Template,
        regions: {
            openMenus: '#openMenus'
        }
    });
    return OpenMenusLayout;
});