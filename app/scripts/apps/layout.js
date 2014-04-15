define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/layout-1',
    'apps/vent'
], function (Backbone, Marionette, $, _, template, appVent) {
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
        onRender: function () {
            this.$('#appSelector').trigger('change');
        },
        appChanged: function (e) {
            e.preventDefault();
            var appName = $(e.target).val();
            if (appName === 'public') {
                appVent.trigger('publicApp:show', this);
            } else {
                appVent.trigger('privateApp:show', this);
            }
        },
        setSelection: function (app) {
            this.$('select').val(app);
        },
        setupSelectionEvents: function () {
            var self = this;
            appVent.bind('publicapp:show', function () {
                self.setSelection('public');
            });
            appVent.bind('privateapp:show', function () {
                self.setSelection('private');
            });
        }
    });
    return Layout;
});