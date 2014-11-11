define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/restaurant/views/update/header',
    'apps/private/apps/restaurant/views/update/footer',
    'apps/private/common/views/form/form'
],
function ($, _, App, HeaderView, FooterView, FormView) {
    return function (restaurant) {
        var headerView,
            formView,
            footerView;
        _.extend(restaurant.attributes, {title: 'Edit restaurant'});
        headerView = new HeaderView({model: restaurant});
        formView = new FormView({model: restaurant});
        footerView = new FooterView({model: restaurant});
        footerView.on('save', function (options) {
            options.model.save(options.model.attributes, {
                success: function () {
                    App.PrivateApp.RestaurantApp.trigger('restaurant:save', restaurant);
                }
            });
        });
        footerView.on('cancel', function () {
            App.PrivateApp.RestaurantApp.trigger('restaurant:cancel', restaurant);
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
