define([
    'backbone.marionette',
    'hbs!tmpl/menuItemSize'
], function (Marionette, template) {
    'use strict';
    var MenuItemSizeView = Marionette.ItemView.extend({
        tagName: 'div',
        template: template
    });
    return MenuItemSizeView;
});