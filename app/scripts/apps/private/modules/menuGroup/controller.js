define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'helpers/vent',
    'apps/private/modules/menuGroup/views/form',
    'apps/private/routes',
    'apps/private/screenHeaders',
    'views/generic/buttons',
    'views/generic/screenHeader'
], function (Backbone, Marionette, $, _, vent, MenuGroupView, routes, screenHeaders, ButtonsView, ScreenHeaderView) {
    'use strict';
    var MenuGroupController = Backbone.Marionette.Controller.extend({
        model: {},
        view: {},
        show: function () {
            this.view.header = this.getViewHeader();
            this.view.body = this.getViewBody();
            this.view.footer = this.getViewFooter();
            vent.trigger('screen:show', {
                header: this.view.header,
                body: this.view.body,
                footer: this.view.footer
            });
        },
        getViewHeader: function () {
            return new ScreenHeaderView({
                model: new Backbone.Model(screenHeaders.menuGroup)
            });
        },
        getViewBody: function () {
            return new MenuGroupView({
                model: this.model
            });
        },
        getViewFooter: function () {
            var view = new ButtonsView({
                model: this.model
            });
            this.listenTo(view, 'next', this.onNext);
            this.listenTo(view, 'previous', this.onPrevious);
            return view;
        },
        onNext: function (model) {
            var menuItems = model.get('menuItems');
            menuItems.fetch({
                success: function (collection) {
                    vent.trigger('module:next', routes.route('menuItems', {model: model, collection: collection}));
                }
            });
        },
        onPrevious: function (model) {
            vent.trigger('module:previous', routes.route('menuGroups', {model: model.get('menu'), collection: model.collection}));
        }
    });
    return new MenuGroupController();
});
