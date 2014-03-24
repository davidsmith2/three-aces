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
            var allCategories = _.uniq(menuItems.pluck('menuItemCategory')),
                uniqueCategories = [],
                categoriesView;
            _.filter(allCategories, function (category) {
                uniqueCategories.push({menuItemCategory: category});
            });
            uniqueCategories.unshift({menuItemCategory: 'All'});
            categoriesView = new CategoriesView({
                collection: new Backbone.Collection(uniqueCategories)
            });
            communicator.reqres.request('RM:getRegion', 'navRegion').show(categoriesView);
            categoriesView.listenTo(menuItems, 'add', categoriesView.render);
        }
    });
    return new CategoryController();
});