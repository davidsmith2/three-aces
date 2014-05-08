define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/layout'
], function (Backbone, Marionette, $, _, layoutVent) {
    'use strict';
    var BaseLayout = Backbone.Marionette.Layout.extend({
        type: '',
        regions: {},
        initialize: function () {
            this.listenTo(layoutVent, 'layout:' + this.type + ':showViews', this.showViews);
            this.listenTo(layoutVent, 'layout:' + this.type + ':showView', this.showView);
        },
        onRender: function () {
            layoutVent.trigger('layout:' + this.type + ':rendered', this);
        },
        showViews: function (views) {
            for (var region in views) {
                this.showView(region, views[region]);
            }
        },
        showView: function (region, view) {
            if (view) {
                this[region].show(view);
            }
        }
    });
    return BaseLayout;
});