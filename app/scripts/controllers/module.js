define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/layout',
    'views/module/header'
], function (Backbone, Marionette, $, _, layoutVent, HeaderView) {
    'use strict';
    var ModuleController = Backbone.Marionette.Controller.extend({
        relatedLayout: {},
        viewModels: {
            header: {
                title: '',
                description: '',
                shortTitle: ''
            }
        },
        relatedViews: {
            body: {}
        },
        views: {
            header: {},
            body: {},
            footer: {}
        },
        show: function () {
            this.views.header = this.getHeaderView();
            this.views.body = this.getBodyView();
            this.views.footer = this.getFooterView();
            layoutVent.trigger('layout:module:showViews', this.views);
        },
        getHeaderView: function () {
            return new HeaderView({
                model: new Backbone.Model(this.viewModels.header)
            });
        },
        getBodyView: function () {},
        getFooterView: function () {}
    });
    return ModuleController;
});
