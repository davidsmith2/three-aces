define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'hbs!tmpl/layouts/container'
], function (Backbone, Marionette, $, _, vent, ContainerTemplate) {
    'use strict';
    var ContainerLayout = Backbone.Marionette.Layout.extend({
        template: ContainerTemplate,
        regions: {
            header: '#header',
            nav: '#nav',
            main: '#main',
            footer: '#footer',
            dialog: '#dialog'
        },
        initialize: function () {
            this.listenTo(vent, 'layout:change', this.changeLayout);
        },
        onRender: function () {
            vent.trigger('privateApp:show');
        },
        changeLayout: function (region, layout) {
            this[region].show(layout);
        }
    });
    return new ContainerLayout();
});