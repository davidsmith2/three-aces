define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore'
], function (Backbone, Marionette, $, _) {
    'use strict';
    var BaseLayout = Backbone.Marionette.Layout.extend({
        regions: {},
        showViews: function (views) {
            for (var region in views) {
                this.showView(region, views[region]);
            }
        },
        showView: function (region, view) {

            console.log(region)

            this[region].show(view);

        }
    });
    return BaseLayout;
});