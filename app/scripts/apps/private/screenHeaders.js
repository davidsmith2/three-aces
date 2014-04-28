define([
], function () {
    return {
        openMenus: {
            title: 'Open menus',
            description: 'Add a new open menu or update an existing one.',
            screens: {
                restaurant: {
                    title: 'Restaurant',
                    description: 'Add some information about your restaurant.'
                },
                environment: {
                    title: 'Environment',
                    description: 'Add some information about your restaurant\'s environment.'
                },
                menus: {
                    title: 'Menus',
                    description: 'Add a new menu or update an existing one.',
                    screens: {
                        menu: {
                            title: 'Menu',
                            description: 'Add some information about your menu.',
                        },
                        menuGroups: {
                            title: 'Menu groups',
                            description: 'Add a new menu group or update an existing one.',
                            screens: {
                                menuGroup: {
                                    title: 'Menu group',
                                    description: 'Add some information about your menu group.',
                                    screens: {
                                        menuItems: {
                                            title: 'Menu items',
                                            description: 'Add a new menu item or update an existing one.',
                                            screens: {
                                                menuItem: {
                                                    title: 'Menu item',
                                                    description: 'Add some information about your menu item.',
                                                    screens: {
                                                        menuItemSizes: {
                                                            title: '',
                                                            description: '',
                                                            screens: {
                                                                menuItemSize: {
                                                                    title: '',
                                                                    description: ''
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    };
});