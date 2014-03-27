define([
    'backbone.marionette',
    'jquery',
    'apps/public/views/category',
    'hbs!tmpl/menuItemCategories'
], function (Marionette, $, CategoryView, template) {
    'use strict';
    var CategoriesView = Marionette.CompositeView.extend({
        itemView: CategoryView,
        itemViewContainer: 'ul',
        template: template,
        events: {
            'click .menuItemCategory': 'showMenuItemsByCategory'
        },
        showMenuItemsByCategory: function (e) {
            var category = $(e.target).text();
            e.preventDefault();
            this.trigger('menuItems:category:show', category);
        }
    });
    return CategoriesView;
});