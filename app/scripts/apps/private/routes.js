define([
], function () {
    return {
        routes: {
            openMenus: function (options) {
                var route = '!/openmenus';

                console.log(route)

                return {
                    entity: options.collection,
                    route: route
                };
            },
            restaurant: function (options) {
                var openMenu = options.model,
                    route = '!/openmenus/' + openMenu.get('_id') + '/restaurant';

                console.log(route)

                return {
                    entity: options.model,
                    route:  route
                };
            },
            environment: function (options) {
                var openMenu = options.model,
                    route = '!/openmenus/' + openMenu.get('_id') + '/environment';

                console.log(route)

                return {
                    entity: options.model,
                    route: route
                };
            },
            menus: function (options) {
                var openMenu = options.model,
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus';

                console.log(route)

                return {
                    entity: options.collection,
                    route: route
                };
            },
            menu: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id');

                console.log(route)

                return {
                    entity: options.model,
                    route: route
                };
            },
            menuGroups: function (options) {
                var menu = options.model,
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups';

                console.log(route)

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

                console.log(route)

                return {
                    entity: options.model,
                    route: route
                };
            },
            menuItems: function (options) {
                var menuGroup = options.model,
                    menu = menuGroup.get('menu'),
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '/menuitems';

                console.log(route)

                return {
                    entity: options.collection,
                    route: route
                };
            },
            menuItem: function (options) {
                var menuItem = options.model,
                    menuGroup = menuItem.get('menuGroup'),
                    menu = menuGroup.get('menu'),
                    openMenu = menu.get('openMenu'),
                    route = '!/openmenus/' + openMenu.get('_id') + '/menus/' + menu.get('_id') + '/menugroups/' + menuGroup.get('_id') + '/menuitems/' + menuItem.get('_id');

                console.log(route)

                return {
                    entity: options.model,
                    route: route
                };
            }
        },
        route: function (name, options) {
            return this.routes[name](options);
        }
    };
});