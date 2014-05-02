define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/layouts/main',
    'helpers/vent'
], function (Backbone, Marionette, $, _, MainTemplate, vent) {
    'use strict';
    var MainLayout = Backbone.Marionette.Layout.extend({
        template: MainTemplate,
        regions: {
            nav: '#main-nav',
            header: '#main-header',
            content: '#main-content',
            footer: '#main-footer'
        },
        events: {
            'click #main-nav [href=#restaurant]': 'showRestaurant',
            'click #main-nav [href=#environment]': 'showEnvironment',
            'click #main-nav [href=#menus]': 'showMenus'
        },
        initialize: function () {
            this.listenTo(vent, 'screen:show', this.showViews);
        },
        showViews: function (regions) {
            for (var region in regions) {
                this[region].show(regions[region]);
            }
        },
        showRestaurant: function (e) {
            e.preventDefault();
            vent.trigger('restaurant:show');
        },
        showEnvironment: function (e) {
            e.preventDefault();
            vent.trigger('environment:show');
        },
        showMenus: function (e) {
            e.preventDefault();
            vent.trigger('menus:show');
        },
    });
    return new MainLayout();
});