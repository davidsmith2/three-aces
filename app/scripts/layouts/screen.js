define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/screen',
    'helpers/vent'
], function (Backbone, Marionette, $, _, ScreenTmpl, vent) {
    'use strict';
    var Screen = Backbone.Marionette.Layout.extend({
        template: ScreenTmpl,
        regions: {
            header: '.screen-header',
            body: '.screen-body',
            footer: '.screen-footer'
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
    return new Screen();
});