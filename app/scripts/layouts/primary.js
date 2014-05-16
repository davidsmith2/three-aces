define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/layout',
    'hbs!tmpl/layouts/primary'
], function (Backbone, Marionette, $, _, BaseLayout, layoutVent, Template) {
    'use strict';
    var PrimaryLayout = BaseLayout.extend({
        type: 'primary',
        template: Template,
        regions: {
            body: '#main-body'
        }
    });
    return PrimaryLayout;
});