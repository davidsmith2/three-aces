define([
    'underscore',
    'backbone',
    'app',
    'apps/private/apps/restaurant/views/update/header',
    'apps/private/apps/restaurant/views/update/footer',
    'apps/private/common/views/form/form'
],
function (_, Backbone, App, HeaderView, FooterView, FormView) {
    return function (options) {
        var headerView,
            formView,
            footerView;
        _.extend(options.model.attributes, {
            title: 'Edit restaurant'
        });
        headerView = new HeaderView({
            model: options.model
        });
        formView = new FormView({
            model: options.model
        });
        footerView = new FooterView({
            model: options.model
        });
        footerView.on('cancel', function (options) {
            App.vent.trigger('restaurant:cancel', {model: options.model});
        });
        App.execute('dialog:show', {
            region: App.dialogRegion,
            headerView: headerView,
            bodyView: formView,
            footerView: footerView,
            callback: function (dialog) {
                footerView.on('save', function (options) {
                    options.model.save(options.model.attributes, {
                        success: function (restaurant) {
                            App.vent.trigger('restaurant:save', {model: restaurant});
                        }
                    });
                });
                footerView.on('save cancel', dialog.dismiss, dialog);
            }
        });
    };
});
