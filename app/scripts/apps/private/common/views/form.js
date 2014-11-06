define([
	'backbone',
	'jquery',
	'bootstrap',
	'backbone-forms',
	'backbone-forms-bootstrap3'
], function (Backbone, $) {
	var FormView = Backbone.View.extend({
		initialize: function (options) {
			this.options = options;
			this.form = new Backbone.Form({
				model: this.model
			});
			this.on('render', this.onRender, this);
		},
		ui: {},
		events: {
			'blur input[type=text]': 'saveTextField',
			'change input[type=checkbox]': 'saveCheckboxField',
			'change select': 'saveSelectField'
		},
		render: function () {
			this.$el.empty().append(this.form.render().el);
			this.trigger('render');
			return this;
		},
		onRender: function () {
			this.$('.control-label')
				.css('display', 'block')
				.removeClass('col-sm-2')
				.addClass('col-sm-3')
				.next('div')
				.removeClass('col-sm-10')
				.addClass('col-sm-9');
			this.$('input[type=checkbox]').removeClass('form-control');
			if (this.options.isReadOnly) {
				this.$('.form-control').prop('disabled', true);
			}
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
