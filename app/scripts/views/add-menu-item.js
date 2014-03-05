define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!tmpl/add-menu-item'
], function ($, _, Backbone, template) {
    'use strict';

    var AddMenuItemView = Backbone.Marionette.ItemView.extend({
        id: 'add-menu-item',
        tagName: 'form',
        template: template,
        events: {
            'submit': 'handleSubmit'
        },
        handleSubmit: function (e) {
            e.preventDefault();
            this.save(e.target);
        },
        save: function (target) {
            var formData = {};
            $(target).find('input[name]').each(function (i, el) {
                var name = el.name,
                    val = $(el).val();

                if (val !== '') {
                    formData[name] = val;
                }
                $(el).val('');
            });
            this.collection.create(formData);
        }
    });

    return AddMenuItemView;

});