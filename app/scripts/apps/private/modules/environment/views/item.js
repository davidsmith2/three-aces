define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'hbs!tmpl/modules/private/environment/item'
], function (Backbone, Marionette, $, _, EnvironmentTmpl) {
    'use strict';
	var EnvironmentView = Backbone.Marionette.ItemView.extend({
        template: EnvironmentTmpl
    });
    return EnvironmentView;
});
