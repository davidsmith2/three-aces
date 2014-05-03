define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'layouts/base',
    'hbs!tmpl/layouts/container'
], function (Backbone, Marionette, $, _, vent, BaseLayout, Template) {
    'use strict';
    var ContainerLayout = BaseLayout.extend({
        template: Template,
        regions: {
            header: '#header',
            nav: '#nav',
            main: '#main',
            footer: '#footer',
            dialog: '#dialog'
        },
        initialize: function () {
            this.listenTo(vent, 'layout:container:showViews', this.showViews);
            this.listenTo(vent, 'layout:container:showView', this.showView);
        },
        onRender: function () {
            vent.trigger('privateApp:show');
        }
    });
    return ContainerLayout;
});