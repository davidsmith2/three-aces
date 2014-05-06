define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuGroup/views/form',
    'apps/private/modules/metadata',
    'views/generic/mainHeader'
], function (Backbone, Marionette, $, _, vent, MenuGroupView, metadata, MainHeaderView) {
    'use strict';
    var MenuGroupController = Backbone.Marionette.Controller.extend({
        model: {},
        views: {
            title: {},
            body: {},
            footer: {}
        },
        show: function () {
            this.views.title = this.getTitleView();
            this.views.body = this.getBodyView();
            this.views.footer = this.getFooterView();
            vent.trigger('layout:dialog:showViews', this.views);
        },
        getTitleView: function () {
            return new MainHeaderView({
                model: new Backbone.Model(metadata.menuGroup)
            });
        },
        getBodyView: function () {
            return new MenuGroupView({
                model: this.model
            });
        },
        getFooterView: function () {
            return new Backbone.View();
        }
    });
    return new MenuGroupController();
});
