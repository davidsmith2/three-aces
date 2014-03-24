define([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'apps/category/views/categoriesView',
    'communicator'
], function ($, _, Backbone, Marionette, CategoriesView, communicator) {
    'use strict';
    var CategoryController = Backbone.Marionette.Controller.extend({
        showView: function (vent, menuItems) {
            var categoriesView = new CategoriesView({
                collection: new Backbone.Collection(this.getCategories(menuItems))
            });
            communicator.reqres.request('RM:getRegion', 'navRegion').show(categoriesView);
        },
        getCategories: function (menuItems) {
            var allCategories = _.uniq(menuItems.pluck('menuItemCategory')),
                uniqueCategories = [];
            _.filter(allCategories, function (category) {
                uniqueCategories.push({
                    menuItemCategory: category,
                    numMenuItems: menuItems.where({menuItemCategory: category}).length
                });
            });
            uniqueCategories.unshift({
                menuItemCategory: 'All',
                numMenuItems: menuItems.length
            });
            return uniqueCategories;
        }
    });
    return new CategoryController();
});