define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'vents/layout',
    'views/module/footer',
    'views/module/header'
], function (Backbone, Marionette, $, _, layoutVent, ModuleFooterView, ModuleHeaderView) {
    'use strict';
    var ModuleController = Backbone.Marionette.Controller.extend({
        viewModels: {
            header: {
                title: '',
                description: ''
            },
            footer: {
                shortTitle: ''
            }
        },
        relatedViews: {
            body: {}
        },
        views: {},
        show: function () {
            this.views.moduleHeader = this.getModuleHeaderView();
            this.views.moduleBody = this.getModuleBodyView();
            this.views.moduleFooter = this.getModuleFooterView();
            layoutVent.trigger('layout:module:showViews', this.views);
        },
        getModuleHeaderView: function () {
            return new ModuleHeaderView({
                model: new Backbone.Model(this.viewModels.header)
            });
        },
        getModuleFooterView: function () {
            return new ModuleFooterView({
                model: new Backbone.Model(this.viewModels.footer)
            });
        }
    });
    return ModuleController;
});
