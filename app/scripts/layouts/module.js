define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/layout',
    'hbs!tmpl/layouts/module'
], function (Backbone, Marionette, $, _, BaseLayout, layoutVent, Template) {
    'use strict';
    var ModuleLayout = BaseLayout.extend({
        type: 'module',
        template: Template,
        regions: {
            header: '.module-header',
            body: '.module-body',
            footer: '.module-footer'
        }
    });
    return ModuleLayout;
});