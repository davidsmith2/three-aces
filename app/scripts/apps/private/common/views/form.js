define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'bootstrap',
    'backbone-forms',
    'backbone-forms-bootstrap3'
], function (Backbone, Marionette, $, _) {
	var FormView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;
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
            this.$el.empty().append(this.form.render().el);
            if (this.options.isReadOnly) {
	            this.$('.form-control').prop('disabled', true);
            }
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
