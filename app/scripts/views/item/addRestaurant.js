define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/item/addRestaurant',
    'backbone-forms',
    'bootstrap'
], function (Backbone, Marionette, $, _, AddRestaurantTmpl) {
    'use strict';
	return Backbone.Marionette.ItemView.extend({
		initialize: function() {
            this.form = new Backbone.Form({
                model: this.model
            }).render().el;
		},
		template: AddRestaurantTmpl,
        ui: {},
		events: {
            'click .close': 'closeDialog',
            'blur input[type=text]': 'saveTextInput',
            'change select': 'saveSelect'
        },
		onRender: function() {
            this.$el.find('.modal-body').append(this.form);
            this.$(this.options.dialogId).modal('show');
        },
        closeDialog: function (e) {
            var dialogId = $(e.target).closest('.modal').attr('id');
            $('#' + dialogId).modal('hide');
            this.collection.create(this.model);
        },
        saveTextInput: function (e) {
            var $target = $(e.target),
                fieldData = {};
            fieldData[$target.attr('name')] = $target.val();
            this.saveModel(fieldData);
        },
        saveSelect: function (e) {
            var $target = $(e.target),
                fieldData = {};
            fieldData[$target.attr('name')] = $target.find(':selected').text();
            this.saveModel(fieldData);
        },
        saveModel: function (fieldData) {
            this.model.save(fieldData, {patch: true});
        }
	});
});
