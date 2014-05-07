define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/private/modules/menu/tabs',
    'helpers/vent',
    'layouts/base'
], function (Backbone, Marionette, $, _, Template, vent, BaseLayout) {
    'use strict';
    var TabsLayout = BaseLayout.extend({
        template: Template,
        regions: {
            menuInfo: '#menuInfo',
            menuGroups: '#menuGroups',
            menuItems: '#menuItems'
        },
        events: {
            'click .nav a': 'onTabClick'
        },
        initialize: function () {
            this.listenTo(vent, 'layout:menu:tabs:showViews', this.showViews);
            this.listenTo(vent, 'layout:menu:tabs:showView', this.showView);
        },
        onRender: function () {
            this.trigger('layout:menu:tabs:rendered', 'MenuInfo');
        },
        onTabClick: function (e) {
            var $el = $(e.target),
                href = $el.attr('href').slice(1);
            e.preventDefault();
            this.trigger('ui:menu:tab:clicked', this.capitalizeFirstLetter(href));
            $el.tab('show');
        },
        capitalizeFirstLetter: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    });
    return TabsLayout;
});
