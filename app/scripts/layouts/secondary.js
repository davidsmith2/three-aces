define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'layouts/base',
    'hbs!tmpl/layouts/secondary'
], function (Backbone, Marionette, $, _, vent, BaseLayout, Template) {
    'use strict';
    var SecondaryLayout = BaseLayout.extend({
        template: Template,
        regions: {
            header: '#main-header',
            body: '#main-body',
            footer: '#main-footer',
            nav: '#main-nav'
        },
        initialize: function () {
            this.listenTo(vent, 'layout:secondary:showViews', this.showViews);
            this.listenTo(vent, 'layout:secondary:showView', this.showView);
        }
    });
    return SecondaryLayout;
});