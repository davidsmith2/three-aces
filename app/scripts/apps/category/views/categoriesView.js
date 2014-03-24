define([
    'backbone.marionette',
    'jquery',
    'apps/category/views/categoryView',
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
            e.preventDefault();
            console.log($(e.target).text());
        }
    });
    return CategoriesView;
});