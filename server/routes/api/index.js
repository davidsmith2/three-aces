module.exports = function (app) {
    'use strict';
    require('./openMenus')(app);
    require('./restaurants')(app);
    require('./menuGroups')(app);
    require('./menuItems')(app);
    require('./menuItemSizes')(app);
};