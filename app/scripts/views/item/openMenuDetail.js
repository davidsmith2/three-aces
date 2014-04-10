define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'apps/private/threeaces.privateapp.vent',
    'hbs!tmpl/item/openMenuDetail',
    'views/composite/menusList',
    'views/item/addEnvironment',
    'views/item/addRestaurant'
], function (Backbone, Marionette, $, _, privateAppVent, OpenMenuDetailTmpl, MenusListView, AddEnvironmentView, AddRestaurantView) {
    'use strict';
	var OpenMenuDetailView = Backbone.Marionette.ItemView.extend({
        template: OpenMenuDetailTmpl,
        ui: {},
        initialize: function () {
            this.addRestaurantView = new AddRestaurantView({
                model: this.model.get('restaurantInfo')
            }).render();
            this.addEnvironmentView = new AddEnvironmentView({
                model: this.model.get('environment')
            }).render();
            this.menusListView = new MenusListView({
                collection: new Backbone.Collection([{
                    menuName: 'test',
                    currencySymbol: '$'
                }])
            }).render();
        },
        onRender: function () {
            this.$('#restaurantInfo').append(this.addRestaurantView.el);
            this.$('#environment').append(this.addEnvironmentView.el);
            this.$('#menus').append(this.menusListView.el);
        }
    });
    return OpenMenuDetailView;
});
