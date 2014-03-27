define([
    'backbone',
    'entities/menuItem'
], function (Backbone, MenuItemModel) {
    'use strict';
    var MenuItemsCollection = Backbone.Collection.extend({
        model: MenuItemModel,
        url: '/api/menu-items',
        comparator: 'menuItemCategory',
        forCategory: function (category) {
            var filteredItems, x;
            if (!category) {
                return this;
            }
            filteredItems = this.filter(function (item) {
                var category, found;
                category = item.get('menuItemCategory');
                found = category.indexOf(category) >= 0;
                return found;
            });

            x = new MenuItemsCollection(filteredItems);
            return x;
        }
    });
    return MenuItemsCollection;
});