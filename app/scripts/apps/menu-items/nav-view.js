define([
    'application',
    'jquery',
    'backbone.marionette',
    'hbs!tmpl/nav',
    'bootstrap'
], function (App, $, Marionette, NavTmpl) {
    'use strict';

    var Nav = App.module('MenuItemsApp.Nav');

    Nav.View = Marionette.ItemView.extend({
        template: NavTmpl,
        events: {
            'click .btn': 'addMenuItem'
        },
        addMenuItem: function (e) {
            var modalId = $(e.target).attr('href');
            e.preventDefault();
            $(modalId).modal('show');
        }
    });

    return Nav;

});