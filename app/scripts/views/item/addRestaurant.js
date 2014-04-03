define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'backbone-forms',
    'bootstrap'
], function (Backbone, Marionette, $) {
    'use strict';
	return Backbone.View.extend({
		initialize: function() {
            this.form = new Backbone.Form({
                model: this.model
            }).render();
		},
        ui: {},
		events: {
            'click .close': 'closeDialog',
            'blur input[type=text]': 'saveTextInput',
            'change select': 'saveSelect'
        },
        render: function () {
            this.$el.append(this.form.el);
            return this;
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
