define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'views/menuItems',
    'views/menuItemCategories'
], function (Backbone, Marionette, $, _, MenuItemsView, MenuItemCategoriesView) {
    'use strict';

    var PublicApp = Backbone.Marionette.Controller.extend({
        data: function (data) {
            this.menuItems = data.menuItems;
            this.menuItemSizes = data.menuItemSizes;
        },
        layout: function (layout) {
            var menuItemsView = new MenuItemsView({
                collection: this.menuItems
            });
            var menuItemCategoriesView = new MenuItemCategoriesView({
                collection: this.getCategories(this.menuItems)
            });
            layout.main.show(menuItemsView);
            layout.navigation.show(menuItemCategoriesView);
            this.listenTo(menuItemCategoriesView, 'menu:category:show', this.showMenuByCategory);
        },
        getCategories: function (menuItems) {
            var all = _.uniq(menuItems.pluck('menuItemCategory')),
                unique = [];
            _.filter(all, function (category) {
                unique.push({
                    menuItemCategory: category,
                    numMenuItems: menuItems.where({menuItemCategory: category}).length
                });
            });
            unique.unshift({
                menuItemCategory: 'All',
                numMenuItems: menuItems.length
            });
            return new Backbone.Collection(unique);
        },
        showFilteredMenuItems: function () {
/*
            this.menuItems.on('reset', function (items) {
                var filteredItems = items.forCategory(category);
            });
*/
        },
        showMenuByCategory: function () {
            console.log('menu:category:show');
        },
        showMenuItem: function (id) {
            console.log('menuItem:show');
        }
    });
    return new PublicApp();
});
