define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'layouts/base',
    'hbs!tmpl/layouts/primary'
], function (Backbone, Marionette, $, _, vent, BaseLayout, Template) {
    'use strict';
    var PrimaryLayout = BaseLayout.extend({
        template: Template,
        regions: {
            header: '#main-header',
            body: '#main-body',
            footer: '#main-footer'
        },
        initialize: function () {
            this.listenTo(vent, 'layout:primary:showViews', this.showViews);
            this.listenTo(vent, 'layout:primary:showView', this.showView);
        }
    });
    return PrimaryLayout;
});