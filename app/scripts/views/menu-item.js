define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/menu-item'
], function ($, _, Backbone, MenuItem_tmpl) {
    'use strict';

    var MenuItemView = Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: MenuItem_tmpl
    });

    return MenuItemView;

});