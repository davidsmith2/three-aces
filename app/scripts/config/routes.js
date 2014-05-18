define([
], function () {
    return {
        handlers: {
            openMenus: function (options) {
                var openMenus = options.collection,
                    pathname = '!/openmenus';
                return {
                    entity: openMenus,
                    pathname: pathname
                };
            },
            restaurant: function (options) {
                var openMenu = options.model,
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/restaurant';
                return {
                    entity: openMenu.get('restaurantInfo'),
                    pathname: pathname
                };
            },
            environment: function (options) {
                var openMenu = options.model,
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/environment';
                return {
                    entity: openMenu.get('environment'),
                    pathname: pathname
                };
            },
            menus: function (options) {
                var openMenu = options.model,
                    menus = options.collection,
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/menus';
                return {
                    entity: menus,
                    pathname: pathname
                };
            },
            menuInfo: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menuinfo';
                return {
                    entity: menu,
                    pathname: pathname
                };
            },
            menuGroups: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups';
                return {
                    entity: options.collection,
                    pathname: pathname
                };
            },
            menuItems: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menuitems';
                return {
                    entity: options.collection,
                    pathname: pathname
                };
            },
            menuGroup: function (options) {
                var menuGroup = options.model,
                    menu = menuGroup.get('menu'),
                    openMenu = menu.get('openMenu'),
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id');
                return {
                    entity: options.model,
                    pathname: pathname
                };
            },
            menuItem: function (options) {
                var menuItem = options.model,
                    menu = menuItem.get('menu'),
                    openMenu = menu.get('openMenu'),
                    pathname = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menuitems/' + menuItem.get('_id');
                return {
                    entity: options.model,
                    pathname: pathname
                };
            }
        },
        handle: function (name, options) {
            return this.handlers[name](options);
        }
    };
});