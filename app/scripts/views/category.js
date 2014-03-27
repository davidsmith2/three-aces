define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItemCategory'
], function (Marionette, $, template) {
    'use strict';
    var CategoryView = Marionette.ItemView.extend({
        tagName: 'li',
        template: template
    });
    return CategoryView;
});