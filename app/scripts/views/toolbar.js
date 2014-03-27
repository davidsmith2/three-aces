define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/toolbar',
    'apps/threeaces.vent'
], function (Backbone, Marionette, $, _, template, vent) {
    'use strict';
    var ToolbarView = Marionette.ItemView.extend({
        template: template,
        events: {
            'click .btn': 'addMenuItem'
        },
        addMenuItem: function (e) {
            var modalId = $(e.target).attr('href');
            e.preventDefault();
            vent.trigger('menuItem:add', modalId);
        }
    });
    return ToolbarView;
});