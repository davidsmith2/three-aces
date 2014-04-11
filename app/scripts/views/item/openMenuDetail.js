define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/composite/menusList',
    'views/item/addEnvironment',
    'views/item/addRestaurant',
    'views/item/addMenu'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl, MenusListView, AddEnvironmentView, AddRestaurantView, AddMenuView) {
    'use strict';
	var OpenMenuDetailView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        initialize: function () {
            this.addRestaurantView = new AddRestaurantView({
                model: this.model.get('restaurantInfo')
            });
            this.addEnvironmentView = new AddEnvironmentView({
                model: this.model.get('environment')
            });
            this.menusListView = new MenusListView({
                collection: this.model.get('menus')
            });
            privateAppVent.on('menu:add', this.onMenuAdd, this);
            privateAppVent.on('menu:edit', this.onMenuEdit, this);
            privateAppVent.on('menu:delete', this.onMenuDelete, this);
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.addRestaurantView.render().el);
            this.$('#environment').append(this.addEnvironmentView.render().el);
            this.$('#menus').append(this.menusListView.render().el);
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
            this.addMenuView = new AddMenuView({
                model: options.model
            });
            privateAppVent.trigger('ui:menu:edit', this.addMenuView);
        },
        onMenuDelete: function (options) {
            options.model.destroy();
        }
    });
    return OpenMenuDetailView;
});
