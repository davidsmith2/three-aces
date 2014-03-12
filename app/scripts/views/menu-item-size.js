define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/menu-item-size'
], function ($, _, Backbone, template) {
    'use strict';

    var MenuItemSizeView = Backbone.Marionette.ItemView.extend({
        tagName: 'span',
        template: template
    });

    return MenuItemSizeView;

});