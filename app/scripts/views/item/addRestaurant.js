define([
	'backbone',
    'jquery',
    'hbs!tmpl/addRestaurant',
    'backbone-forms',
    'bootstrap'
],
function( Backbone, $, template ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
            this.form = new Backbone.Form({
                model: this.model
            }).render();
		},
		
    	template: template,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click .close': 'dismissDialog',
            'blur input[type=text]': 'saveInputTypeText'
        },

		/* on render callback */
		onRender: function() {
            this.$el.find('.modal-body').append(this.form.el);
            this.$(this.options.dialogId).modal('show');
        },
        dismissDialog: function (e) {
            var dialogId = $(e.target).closest('.modal').attr('id');
            $('#' + dialogId).modal('hide');
        },
        saveInputTypeText: function (e) {
            var $target = $(e.target),
                fieldData = {};

            fieldData[$target.attr('name')] = $target.val();

            this.model.save(fieldData, {patch: true});


        }
	});

});
