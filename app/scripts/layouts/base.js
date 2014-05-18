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
            for (var regionName in views) {
                this.showView(regionName, views[regionName]);
            }
        },
        showView: function (regionName, view) {
            if (this[regionName].currentView != view) {
                this[regionName].show(view);
                this[regionName].currentView = view;
            }
        }
    });
    return BaseLayout;
});