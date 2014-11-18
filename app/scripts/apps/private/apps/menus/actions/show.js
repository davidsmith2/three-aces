define([
    'jquery',
    'app',
    'apps/private/apps/menus/views/show/layout',
    'apps/private/apps/menu/app'
],
function ($, App, LayoutView, MenuApp) {
    return function (openMenuId, menuId) {
        var gettingMenu = App.request('menu:entity', menuId);
        $.when(gettingMenu).done(function (menu) {
            var layoutView = new LayoutView({
                model: menu
            });
            App.mainRegion.show(layoutView);
            App.addRegions(layoutView.regions);
            MenuApp.start(menu);
            //MenuGroupsApp.start(openMenuId, menuId);
        });
    };
});
