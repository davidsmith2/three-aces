define([
	'backbone',
	'jquery',
	'bootstrap',
	'backbone-forms',
	'backbone-forms-bootstrap3'
], function (Backbone, $) {
	return Backbone.View.extend({
		initialize: function (options) {
			this.options = options;
			this.form = new Backbone.Form({
				model: this.model
			});
			this.on('render', this.onRender, this);
		},
		events: {
			'blur input[type=text]': 'setTextField',
			'change input[type=checkbox]': 'setCheckboxField',
			'change select': 'setSelectField'
		},
		render: function () {
			this.$el.empty().append(this.form.render().el);
			this.trigger('render');
			return this;
		},
		onRender: function () {
			this.$('.control-label')
				.removeClass('col-sm-2')
				.addClass('col-sm-3')
				.next('div')
				.removeClass('col-sm-10')
				.addClass('col-sm-9');
			if (this.options.isReadOnly) {
				this.$('.form-control').prop('disabled', true);
			}
			this.$('input[type=checkbox]', 'input[type=radio]').removeClass('form-control');
		},
		setTextField: function (e) {
			var $field = this.getField(e);
			var fieldValue = $field.val();
			this.setField(this.getFieldName($field), fieldValue);
		},
		setCheckboxField: function (e) {
			var $field = this.getField(e);
			var fieldValue = ($field.is(':checked')) ? 1 : 0;
			this.setField(this.getFieldName($field), fieldValue);
		},
		setSelectField: function (e) {
			var $field = this.getField(e);
			var fieldValue = $field.find(':selected').text();
			this.setField(this.getFieldName($field), fieldValue);
		},
		setField: function (fieldName, fieldValue) {
			var fieldData = {};
			fieldData[fieldName] = fieldValue;
			this.model.set(fieldData);
		},
		getFieldName: function ($field) {
			return $field.attr('name');
		},
		getField: function (e) {
			return $(e.target);
		}
	});
});
