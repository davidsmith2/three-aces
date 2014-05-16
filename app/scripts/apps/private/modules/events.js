define([
], function () {
    return {
        handlers: {
            openMenus: function (options) {
                var openMenus = options.collection,
                    route = '!/openmenus';
                return {
                    entity: openMenus,
                    route: route
                };
            },
            restaurant: function (options) {
                var openMenu = options.model,
                    route = '!/openmenus/' + openMenu.get('_id') + '/restaurant';
                return {
                    entity: openMenu.get('restaurantInfo'),
                    route: route,
                    nav: openMenu
                };
            },
            environment: function (options) {
                var openMenu = options.model,
                    route = '!/openmenus/' + openMenu.get('_id') + '/environment';
                return {
                    entity: openMenu.get('environment'),
                    route: route,
                    nav: openMenu
                };
            },
            menus: function (options) {
                var openMenu = options.model,
                    menus = options.collection,
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus';
                return {
                    entity: menus,
                    route: route,
                    nav: openMenu
                };
            },
            menu: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id');
                return {
                    entity: options.model,
                    route: route
                };
            },
            menuInfo: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menuinfo';
                return {
                    entity: options.model,
                    route: route
                };
            },
            menuGroups: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups';
                return {
                    entity: options.collection,
                    route: route
                };
            },
            menuGroup: function (options) {
                var menuGroup = options.model,
                    menu = menuGroup.get('menu'),
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id');
                return {
                    entity: options.model,
                    route: route
                };
            },
            menuItems: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menuitems';
                return {
                    entity: options.collection,
                    route: route
                };
            },
            menuItem: function (options) {
                var menuItem = options.model,
                    menu = menuItem.get('menu'),
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menuitems/' + menuItem.get('_id');
                return {
                    entity: options.model,
                    route: route
                };
            }
        },
        handle: function (name, options) {
            return this.handlers[name](options);
        }
    };
});