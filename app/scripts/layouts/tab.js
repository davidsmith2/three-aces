define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'layouts/base',
    'hbs!tmpl/layouts/menu',
    'bootstrap'
], function (Backbone, Marionette, $, _, vent, BaseLayout, Template) {
    'use strict';
    var MenuLayout = BaseLayout.extend({
        template: Template,
        regions: {
            menu: '#menu',
            menuGroups: '#menuGroups',
            menuItems: '#menuItems'
        },
        events: {
            'click .nav a': 'onNavTabClick',
        },
        initialize: function () {
            this.listenTo(vent, 'layout:menu:showViews', this.showViews);
            this.listenTo(vent, 'layout:menu:showView', this.showView);
        },
        onRender: function () {
            vent.trigger('controller:menu:loadModule', 'Menu');
        },
        onNavTabClick: function (e) {
            var $el = $(e.target),
                href = $el.attr('href').slice(1),
                moduleName = href.charAt(0).toUpperCase() + href.slice(1);
            e.preventDefault();
            this.showTabPane($el);
            vent.trigger('controller:menu:loadModule', moduleName);
        },
        showTabPane: function ($el) {
            $el.tab('show');
        }
    });
    return MenuLayout;
});