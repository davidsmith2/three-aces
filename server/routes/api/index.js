module.exports = function (app) {
    'use strict';
    require('./omfs')(app);
    require('./restaurants')(app);
    require('./menuGroups')(app);
    require('./menuItems')(app);
    require('./menuItemSizes')(app);
};