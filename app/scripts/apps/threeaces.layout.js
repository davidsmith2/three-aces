define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layout',
    'apps/threeaces.vent'
], function (Backbone, Marionette, $, _, template, vent) {
    'use strict';
    var Layout = Backbone.Marionette.Layout.extend({
        template: template,
        regions: {
            header: '#header',
            navigation: '#navigation',
            main: '#main',
            footer: '#footer',
            dialog: '#dialog'
        },
        events: {
            'change #appSelector': 'appChanged'
        },
        initialize: function () {
            _.bindAll(this, 'setSelection');
            this.setupSelectionEvents();
        },
        appChanged: function (e) {
            e.preventDefault();
            var appName = $(e.target).val();
            if (appName === 'public') {
                vent.trigger('publicApp:show', this);
            } else {
                vent.trigger('privateApp:show', this);
            }
        },
        setSelection: function (app) {
            this.$('select').val(app);
        },
        setupSelectionEvents: function () {
            var self = this;
            vent.bind('publicapp:show', function () {
                self.setSelection('public');
            });
            vent.bind('privateapp:show', function () {
                self.setSelection('private');
            });
        }
    });
    return Layout;
});