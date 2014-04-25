define([
], function () {
    return {
        routes: {
            openMenus: function (options) {
                return {
                    entity: options.collection,
                    route: '!/openmenus'
                };
            },
            restaurant: function (options) {
                return {
                    entity: options.model,
                    route: '!/openmenus/' + options.model.get('_id') + '/restaurant'
                };
            },
            environment: function (options) {
                return {
                    entity: options.model,
                    route: '!/openmenus/' + options.model.get('_id') + '/environment'
                };
            },
            menus: function (options) {
                return {
                    entity: options.collection,
                    route: '!/openmenus/' + options.model.get('_id') + '/menus'
                };
            },
            menu: function (options) {
                return {
                    entity: options.model,
                    route: '!/openmenus/' + options.model.get('openMenu').get('_id') + '/menus/' + options.model.get('_id')
                };
            }
        },
        route: function (name, options) {
            return this.routes[name](options);
        }
    };
});