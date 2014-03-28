define([
    'backbone.marionette',
    'jquery',
    'views/menuItemCategory',
    'hbs!tmpl/menuItemCategories'
], function (Marionette, $, MenuItemCategoryView, template) {
    'use strict';
    var MenuItemCategoriesView = Marionette.CompositeView.extend({
        itemView: MenuItemCategoryView,
        itemViewContainer: 'select',
        template: template,
        events: {
            'change': 'showMenuItemsByCategory'
        },
        showMenuItemsByCategory: function (e) {
            var category = $(e.target).text();
            e.preventDefault();
            this.trigger('menu:category:show', category);
        }
    });
    return MenuItemCategoriesView;
});