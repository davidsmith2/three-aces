define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/threeaces.datamanager',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/composite/menusList',
    'views/forms/environment',
    'views/forms/menu',
    'views/forms/restaurant'
], function (Backbone, Marionette, $, _, DataManager, privateAppVent, OpenMenuDetailTmpl, MenusListView, EnvironmentForm, MenuForm, RestaurantForm) {
    'use strict';
	var OpenMenuDetailView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        initialize: function () {
            this.getMenus();
            privateAppVent.on('menu:add', this.onMenuAdd, this);
            privateAppVent.on('menu:edit', this.onMenuEdit, this);
            privateAppVent.on('menu:delete', this.onMenuDelete, this);
        },
        onRender: function () {
            this.$('#restaurant').append(new RestaurantForm({
                model: this.model.get('restaurantInfo')
            }).render().el);
            this.$('#environment').append(new EnvironmentForm({
                model: this.model.get('environment')
            }).render().el);
        },
        getMenus: function () {
            var menus = this.model.get('menus');
            menus.fetch();
            menus.once('sync', this.onMenusSync, this);
        },
        onMenusSync: function (menus) {
            this.$('#menus').append(new MenusListView({
                collection: menus
            }).render().el);
        },
        onMenuAdd: function (options) {
            var self = this;
            this.model.get('menus').create(options.model, {
                success: function (menu) {
                    self.onMenuEdit({
                        model: menu
                    });
                }
            });
        },
        onMenuEdit: function (options) {
            this.menuForm = new MenuForm({
                model: options.model
            });
            privateAppVent.trigger('ui:menu:edit', this.menuForm);
        },
        onMenuDelete: function (options) {
            options.model.destroy();
        }
    });
    return OpenMenuDetailView;
});
