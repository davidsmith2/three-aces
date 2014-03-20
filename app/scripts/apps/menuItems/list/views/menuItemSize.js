define([
    'backbone.marionette',
    'hbs!tmpl/menuItemSize'
], function (Marionette, template) {
    'use strict';
    var MenuItemSize = Marionette.ItemView.extend({
        tagName: 'div',
        template: template
    });
    return MenuItemSize;
});