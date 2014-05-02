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
        events: {
            'click #nav [href=#openMenus]': 'showOpenMenus'
        },
        initialize: function () {},
        onRender: function () {
            vent.trigger('privateApp:show', this.main);
        },
        showOpenMenus: function (e) {
            e.preventDefault();
            vent.trigger('openMenus:show');
        }
    });
    return new ContainerLayout();
});