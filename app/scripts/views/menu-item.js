define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/menu-item'
], function ($, _, Backbone, template) {
    'use strict';

    var MenuItemView = Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: template
    });

    return MenuItemView;

});