define([
    'app',
    'common/views/form',
    'hbs!apps/private/apps/menus/common/views/new_edit/templates/layout'
], function (App, FormView, layoutTmpl) {

    App.module('PrivateApp.MenusApp.Common.Views.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        NewEdit.Form = FormView.extend({});

	});

    return App.PrivateApp.MenusApp.Common.Views.NewEdit;

});