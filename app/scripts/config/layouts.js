define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore',
    'layouts/openMenus',
    'layouts/openMenu',
    'layouts/menu',
    'layouts/module',
    'vents/layout'
], function (Backbone, Marionette, $, _, OpenMenusLayout, OpenMenuLayout, MenuLayout, ModuleLayout, layoutVent) {

    var layouts = {};

    var constructors = {
        openMenus: OpenMenusLayout,
        openMenu: OpenMenuLayout,
        menu: MenuLayout,
        module: ModuleLayout
    };

    var getLayout = function (type, options) {
        var layout;
        if (!layouts[type]) {
            layout = new constructors[type](options);
            layouts[type] = layout;
        } else {
            layout = layouts[type];
        }
        return layout;
    };

    return {
        handlers: {
            openMenus: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenus', options));
                layoutVent.trigger('layout:openMenus:showView', 'openMenus', new ModuleLayout());
            },
            restaurant: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenu', options));
                layoutVent.trigger('layout:openMenu:showView', 'restaurant', new ModuleLayout());
            },
            environment: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenu', options));
                layoutVent.trigger('layout:openMenu:showView', 'environment', new ModuleLayout());
            },
            menus: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenu', options));
                layoutVent.trigger('layout:openMenu:showView', 'menus', new ModuleLayout());
            },
            menuInfo: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenu', options));
                layoutVent.trigger('layout:openMenu:showView', 'menus', getLayout('menu', options));
                layoutVent.trigger('layout:menu:showView', 'menuInfo', new ModuleLayout());
            },
            menuGroups: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenu', options));
                layoutVent.trigger('layout:openMenu:showView', 'menus', getLayout('menu', options));
                layoutVent.trigger('layout:menu:showView', 'menuGroups', new ModuleLayout());
            },
            menuItems: function (options) {
                layoutVent.trigger('layout:container:showView', 'main', getLayout('openMenu', options));
                layoutVent.trigger('layout:openMenu:showView', 'menus', getLayout('menu', options));
                layoutVent.trigger('layout:menu:showView', 'menuItems', new ModuleLayout());
            },
            menuGroup: function (options) {
            },
            menuItem: function (options) {
            }
        },
        handle: function (name, options) {
            return this.handlers[name](options);
        }
    };
});