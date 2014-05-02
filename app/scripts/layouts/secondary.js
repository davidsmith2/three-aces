define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/primary',
    'hbs!tmpl/layouts/secondary'
], function (Backbone, Marionette, $, _, PrimaryLayout, SecondaryTemplate) {
    'use strict';
    var SecondaryLayout = PrimaryLayout.extend({
        template: SecondaryTemplate,
        regions: {
            header: '#main-header',
            content: '#main-content',
            footer: '#main-footer',
            nav: '#main-nav'
        }
    });
    return SecondaryLayout;
});