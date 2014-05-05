define([
    'backbone',
    'entities/models/menuItem'
], function (Backbone, MenuItem) {
    'use strict';
    var MenuItemCollection = Backbone.Collection.extend({
        model: MenuItem,
        url: function () {
            var route = '/openmenus/' + this.menu.get('openMenu').get('_id') + '/menus/' + this.menu.get('_id') + '/menuitems';
            return route;
        },
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

            x = new MenuItemCollection(filteredItems);
            return x;
        }
    });
    return MenuItemCollection;
});