define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/toolbar',
    'apps/private/threeaces.privateapp.vent'
], function (Backbone, Marionette, $, _, template, privateAppVent) {
    'use strict';
    var ToolbarView = Marionette.ItemView.extend({
        template: template,
        events: {
            'click .btn': 'addMenuItem'
        },
        addMenuItem: function (e) {
            var modalId = $(e.target).attr('href');
            e.preventDefault();
            privateAppVent.trigger('menuItem:add', modalId);
        }
    });
    return ToolbarView;
});