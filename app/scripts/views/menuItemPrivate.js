define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItemPrivate'
], function (Marionette, $, template) {
    'use strict';
    var MenuItemPrivateView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: template
    });
    return MenuItemPrivateView;
});