define([
    'jquery',
    'underscore',
    'app',
    'apps/private/apps/menu/views/show/header',
    'apps/private/apps/menu/views/show/definitionList'
],
function ($, _, App, HeaderView, DefinitionListView) {
    return function (menu) {
        var headerView,
            definitionListView;
        _.extend(menu.attributes, {title: 'Menu'});
        headerView = new HeaderView({model: menu});
        definitionListView = new DefinitionListView({model: menu});
        headerView.on('edit', function () {
            App.PrivateApp.RestaurantApp.trigger('restaurant:edit', menu.get('_id'));
        });
        App.execute('panel:show', {
            region: App.menuRegion,
            headingView: headerView,
            bodyView: definitionListView,
            callback: function (panel) {
                panel.ui.heading.addClass('clearfix');
                App.PrivateApp.MenuApp.on('menu:save', definitionListView.render);
            }
        });
    };
});
