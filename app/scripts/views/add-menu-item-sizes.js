define([
    'jquery',
    'underscore',
    'backbone',
    'views/add-menu-item-size'
], function ($, _, Backbone, AddMenuItemSizeView) {
    'use strict';

    var AddMenuItemSizesView = Backbone.Marionette.CollectionView.extend({
        itemView: AddMenuItemSizeView
    });

    return AddMenuItemSizesView;

});