define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/layout',
    'hbs!tmpl/layouts/secondary'
], function (Backbone, Marionette, $, _, BaseLayout, layoutVent, Template) {
    'use strict';
    var SecondaryLayout = BaseLayout.extend({
        type: 'secondary',
        template: Template,
        regions: {
            header: '#main-header',
            body: '#main-body',
            footer: '#main-footer',
            nav: '#main-nav'
        }
    });
    return SecondaryLayout;
});