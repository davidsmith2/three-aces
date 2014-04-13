define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'backbone-forms',
    'bootstrap'
], function (Backbone, Marionette, $) {
    'use strict';
	var FormView = Backbone.View.extend({
		initialize: function () {
            this.form = new Backbone.Form({
                model: this.model
            });
		},
        ui: {},
		events: {
            'blur input[type=text]': 'saveTextField',
            'change input[type=checkbox]': 'saveCheckboxField',
            'change select': 'saveSelectField'
        },
        render: function () {
            this.$el.append(this.form.render().el);
            return this;
        },
        saveTextField: function (e) {
            var $field = this.getField(e);
            var fieldValue = $field.val();
            this.saveField(this.getFieldName($field), fieldValue);
        },
        saveCheckboxField: function (e) {
            var $field = this.getField(e);
            var fieldValue = ($field.is(':checked')) ? 1 : 0;
            this.saveField(this.getFieldName($field), fieldValue);
        },
        saveSelectField: function (e) {
            var $field = this.getField(e);
            var fieldValue = $field.find(':selected').text();
            this.saveField(this.getFieldName($field), fieldValue);
        },
        saveField: function (fieldName, fieldValue) {
            var fieldData = {};
            fieldData[fieldName] = fieldValue;
            this.model.save(fieldData);
        },
        getFieldName: function ($field) {
            return $field.attr('name');
        },
        getField: function (e) {
            return $(e.target);
        }
	});
    return FormView;
});
