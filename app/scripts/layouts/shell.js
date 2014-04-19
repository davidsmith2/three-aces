define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'hbs!tmpl/layouts/shell'
], function (Backbone, Marionette, $, _, vent, ShellTmpl) {
    'use strict';
    var Shell = Backbone.Marionette.Layout.extend({
        template: ShellTmpl,
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
            if (appName !== 'private') {
                vent.trigger('publicApp:show', this.main);
            } else {
                vent.trigger('privateApp:show', this.main);
            }
        },
        setSelection: function (app) {
            this.$('select').val(app);
        },
        setupSelectionEvents: function () {
            var self = this;
            vent.bind('publicApp:show', function () {
                self.setSelection('public');
            });
            vent.bind('privateApp:show', function () {
                self.setSelection('private');
            });
        }
    });
    return new Shell();
});