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
            body: '#main-body',
            nav: '#main-nav'
        }
    });
    return SecondaryLayout;
});