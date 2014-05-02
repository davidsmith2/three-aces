define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/primary',
    'helpers/vent'
], function (Backbone, Marionette, $, _, PrimaryTemplate, vent) {
    'use strict';
    var PrimaryLayout = Backbone.Marionette.Layout.extend({
        template: PrimaryTemplate,
        regions: {
            header: '#main-header',
            content: '#main-content',
            footer: '#main-footer'
        },
        initialize: function () {
            this.listenTo(vent, 'module:change', this.showViews);
        },
        showViews: function (regions) {
            for (var region in regions) {
                this[region].show(regions[region]);
            }
        }
    });
    return PrimaryLayout;
});