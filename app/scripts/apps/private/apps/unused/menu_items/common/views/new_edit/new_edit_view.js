define([
    'app',
    'apps/private/common/views/buttons',
    'apps/private/common/views/dialog',
    'apps/private/common/views/form'
], function (App, ButtonsView, DialogView, FormView) {

    App.module('PrivateApp.MenuItemsApp.Common.Views.NewEdit', function (NewEdit, App, Backbone, Marionette, $, _) {

        NewEdit.Dialog = DialogView.extend({});

        NewEdit.Form = FormView.extend({});

        NewEdit.Buttons = ButtonsView.extend({});

	});

    return App.PrivateApp.MenuItemsApp.Common.Views.NewEdit;

});