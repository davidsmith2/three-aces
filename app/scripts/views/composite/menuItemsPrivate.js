define([
    'backbone.marionette',
    'jquery',
    'hbs!tmpl/menuItemsPrivate',
    'views/item/menuItemPrivate',
    'apps/private/threeaces.privateapp.vent'
], function (Marionette, $, template, MenuItemPrivateView, privateAppVent) {
    'use strict';
    var MenuItemsPrivateView = Marionette.CompositeView.extend({
        itemView: MenuItemPrivateView,
        itemViewContainer: 'tbody',
        template: template,
        events: {
            'click .linkEditMenuItem': 'editMenuItem',
            'click .linkDeleteMenuItem': 'deleteMenuItem'
        },
        editMenuItem: function (e) {
            var menuItem = this.getMenuItem(e.target.id);
            e.preventDefault();
            privateAppVent.trigger('menuItem:edit', menuItem);
        },
        deleteMenuItem: function (e) {
            var menuItem = this.getMenuItem(e.target.id);
            e.preventDefault();
            privateAppVent.trigger('menuItem:delete', menuItem);
        },
        getMenuItem: function (id) {
            return this.collection.get(id.split('-')[1]);
        }
    });
    return MenuItemsPrivateView;
});