define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layout/layout-2'
], function (Backbone, Marionette, $, _, template) {
    'use strict';
    var Layout2 = Backbone.Marionette.Layout.extend({
        template: template,
        regions: {
            top: '#top',
            middle: '#middle',
            bottom: '#bottom',
            dialog: '#dialog'
        }
    });
    return Layout2;
});