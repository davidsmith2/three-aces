define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/base',
    'vents/layout',
    'hbs!tmpl/layouts/container'
], function (Backbone, Marionette, $, _, BaseLayout, layoutVent, Template) {
    'use strict';
    var ContainerLayout = BaseLayout.extend({
        type: 'container',
        template: Template,
        regions: {
            header: '#header',
            nav: '#nav',
            main: '#main',
            footer: '#footer',
            dialog: '#dialog'
        }
    });
    return ContainerLayout;
});