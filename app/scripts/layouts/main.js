define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/main',
    'helpers/vent'
], function (Backbone, Marionette, $, _, MainTemplate, vent) {
    'use strict';
    var MainLayout = Backbone.Marionette.Layout.extend({
        template: MainTemplate,
        regions: {
            header: '#main-header',
            content: '#main-content',
            footer: '#main-footer'
        },
        initialize: function () {
            this.listenTo(vent, 'screen:show', this.showViews);
        },
        showViews: function (regions) {
            for (var region in regions) {
                this[region].show(regions[region]);
            }
        }
    });
    return new MainLayout();
});