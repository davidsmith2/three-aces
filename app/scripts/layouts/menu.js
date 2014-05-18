define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/nav',
    'hbs!tmpl/layouts/menu',
    'bootstrap'
], function (Backbone, Marionette, $, _, NavLayout, Template) {
    'use strict';
    var MenuLayout = NavLayout.extend({
        type: 'menu',
        template: Template,
        regions: {
            navTabs: '.nav-tabs',
            tabContent: '.tabContent',
            menuInfo: '#menuInfo',
            menuGroups: '#menuGroups',
            menuItems: '#menuItems'
        },
        events: {
            'click .nav-tabs [href]': 'selectModule'
        },
        selectModule: function (e) {
            var $el = $(e.target),
                moduleName = $el.attr('href').slice(1);
            e.preventDefault();
            if (moduleName === 'menuInfo') {
                this.loadModelBasedModule(moduleName);
            } else {
                this.loadCollectionBasedModule(moduleName);
            }
            $el.tab('show');
        }
    });
    return MenuLayout;
});