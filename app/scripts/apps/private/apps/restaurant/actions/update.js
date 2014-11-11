define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/restaurant/views/update/header',
    'apps/private/apps/restaurant/views/update/footer',
    'apps/private/common/views/form/form'
],
function ($, _, App, HeaderView, FooterView, FormView) {
    return function (openMenu) {
        var restaurant = openMenu.get('restaurant_info'),
            headerView,
            formView,
            footerView;
        _.extend(restaurant.attributes, {title: 'Edit restaurant'});
        headerView = new HeaderView({model: restaurant});
        formView = new FormView({model: restaurant});
        footerView = new FooterView({model: restaurant});
        footerView.on('save', function (options) {
            options.model.save(options.model.attributes, {
                success: function () {
                    App.PrivateApp.RestaurantApp.trigger('restaurant:save', openMenu.get('_id'));
                }
            });
        });
        footerView.on('cancel', function () {
            App.PrivateApp.RestaurantApp.trigger('restaurant:cancel', openMenu.get('_id'));
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
