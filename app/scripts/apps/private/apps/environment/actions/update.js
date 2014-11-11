define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/environment/views/update/header',
    'apps/private/apps/environment/views/update/footer',
    'apps/private/common/views/form/form'
],
function ($, _, App, HeaderView, FooterView, FormView) {
    return function (openMenu) {
        var environment = openMenu.get('environment'),
            headerView,
            formView,
            footerView;
        _.extend(environment.attributes, {title: 'Edit environment'});
        headerView = new HeaderView({model: environment});
        formView = new FormView({model: environment});
        footerView = new FooterView({model: environment});
        footerView.on('save', function (options) {
            options.model.save(options.model.attributes, {
                success: function () {
                    App.PrivateApp.EnvironmentApp.trigger('environment:save', openMenu.get('_id'));
                }
            });
        });
        footerView.on('cancel', function () {
            App.PrivateApp.EnvironmentApp.trigger('environment:cancel', openMenu.get('_id'));
        });
        App.execute('dialog:show', {
            region: App.dialogRegion,
            headerView: headerView,
            bodyView: formView,
            footerView: footerView,
            callback: function (dialog) {
                footerView.on('save cancel', dialog.dismiss, dialog);
            }
        });
    };
});
