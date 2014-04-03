define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/composite/menus',
    'views/item/menu'
], function (Backbone, Marionette, $, _, MenusTmpl, MenuView) {
    'use strict';
    return Marionette.CompositeView.extend({
        itemView: MenuView,
        itemViewContainer: 'tbody',
        template: MenusTmpl,
        events: {
        }
    });
});