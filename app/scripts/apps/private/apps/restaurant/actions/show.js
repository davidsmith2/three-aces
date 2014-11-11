define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/restaurant/views/show/header',
    'apps/private/apps/restaurant/views/show/definitionList'
],
function ($, _, App, HeaderView, DefinitionListView) {
    return function (restaurant) {
        var headerView,
            definitionListView;
        _.extend(restaurant.attributes, {title: 'Restaurant'});
        headerView = new HeaderView({model: restaurant});
        definitionListView = new DefinitionListView({model: restaurant});
        headerView.on('edit', function () {
            App.PrivateApp.RestaurantApp.trigger('restaurant:edit', restaurant);
        });
        App.execute('panel:show', {
            region: App.restaurantRegion,
            headingView: headerView,
            bodyView: definitionListView,
            callback: function (panel) {
                panel.ui.heading.addClass('clearfix');
            }
        });
    };
});
