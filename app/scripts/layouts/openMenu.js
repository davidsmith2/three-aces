define([
	'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/nav',
    'vents/app',
    'hbs!tmpl/layouts/openMenu',
    'bootstrap'
], function (Backbone, Marionette, $, _, NavLayout, appVent, Template) {
    'use strict';
    var OpenMenuLayout = NavLayout.extend({
        type: 'openMenu',
        template: Template,
        regions: {
            breadcrumbs: '.breadcrumbs',
            navTabs: '.nav-tabs',
            tabContent: '.tabContent',
            restaurant: '#restaurant',
            environment: '#environment',
            menus: '#menus'
        },
        events: {
            'click .breadcrumbs [href]': 'goHome',
            'click .nav-tabs [href]': 'selectModule'
        },
        goHome: function () {
            appVent.trigger('app:initialized');
        },
        selectModule: function (e) {
            var $el = $(e.target),
                moduleName = $el.attr('href').slice(1);
            e.preventDefault();
            if (moduleName === 'menus') {
                this.loadCollectionBasedModule(moduleName);
            } else {
                this.loadModelBasedModule(moduleName);
            }
            $el.tab('show');
        }
    });
    return OpenMenuLayout;
});