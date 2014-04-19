define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/screen'
], function (Backbone, Marionette, $, _, ScreenTmpl) {
    'use strict';
    var Screen = Backbone.Marionette.Layout.extend({
        template: ScreenTmpl,
        regions: {
            header: '.screen-header',
            body: '.screen-body',
            footer: '.screen-footer'
        },
        events: {
            'click a[href=#complete]': 'onComplete'
        },
        onComplete: function (e) {
            e.preventDefault();
            this.trigger('screen:complete');
        }
    });
    return new Screen();
});