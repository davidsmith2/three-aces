define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItemCategory'
], function (Marionette, $, template) {
    'use strict';
    var MenuItemCategoryView = Marionette.ItemView.extend({
        tagName: 'option',
        template: template
    });
    return MenuItemCategoryView;
});