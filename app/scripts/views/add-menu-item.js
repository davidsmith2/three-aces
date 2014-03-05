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
            'submit': 'handleSubmit',
            'click input[name=sizeType]': 'handleSizeTypeClick'
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
        },
        handleSizeTypeClick: function (e) {
            this.toggleSizeTypes(e.target);
        },
        toggleSizeTypes: function (target) {
            if ($(target).val() === 'singleSize') {
                this.showSingleSizeType();
            } else {
                this.showMultiSizeType();
            }
        },
        showSingleSizeType: function () {
            this.$('fieldset[name=multiSize]').hide();
            this.$('fieldset[name=singleSize]').show();
        },
        showMultiSizeType: function () {
            this.$('fieldset[name=singleSize]').hide();
            this.$('fieldset[name=multiSize]').show();
        }
    });

    return AddMenuItemView;

});