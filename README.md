# Three Aces

**Note:** This project is under development. As such, the following should be considered notes rather than "official" documentation.

This project is an attempt to build a somewhat large-scale, complex JavaScript application using REST/MVC principles. The app is based on the [OpenMenu specification](http://openmenu.org/), "the first standard to regulate the way restaurants store and share their menus over the Internet." The app should:

* allow a hypothetical restaurant owner to create open menus for their restaurant(s) [required]
* allow a hypothetical customer to order menu items from open menus [required]

## URL design

### Open menus
* !/openmenus.html
* !/openmenus.html?action=new
* !/openmenus/:open_menu.html?action=show
* !/openmenus/:open_menu.html?action=edit
* !/openmenus/:open_menu.html?action=delete

### Menus
* !/openmenus/:open_menu/menus.html
* !/openmenus/:open_menu/menus.html?action=new
* !/openmenus/:open_menu/menus/:menu.html?action=show
* !/openmenus/:open_menu/menus/:menu.html?action=edit
* !/openmenus/:open_menu/menus/:menu.html?action=delete

### Menu groups
* !/menus/:menu/menugroups.html
* !/menus/:menu/menugroups.html?action=new
* !/menus/:menu/menugroups/:menu_group.html?action=show
* !/menus/:menu/menugroups/:menu_group.html?action=edit
* !/menus/:menu/menugroups/:menu_group.html?action=delete

### Menu items
* !/menugroups/:menu_group/menuitems.html
* !/menugroups/:menu_group/menuitems.html?action=new
* !/menugroups/:menu_group/menuitems/:menu_item.html?action=show
* !/menugroups/:menu_group/menuitems/:menu_item.html?action=edit
* !/menugroups/:menu_group/menuitems/:menu_item.html?action=delete

## REST API

### Private app

| HTTP verb | URL
| --------- | ---
| GET       | /openmenus
| POST      | /openmenus
| GET       | /openmenus/:open_menu
| PUT       | /openmenus/:open_menu
| DELETE    | /openmenus/:open_menu
| GET       | /openmenus/:open_menu/restaurant
| POST      | /openmenus/:open_menu/restaurant
| GET       | /openmenus/:open_menu/environment
| POST      | /openmenus/:open_menu/environment
| GET       | /openmenus/:open_menu/menus
| POST      | /openmenus/:open_menu/menus
| GET       | /openmenus/:open_menu/menus/:menu
| PATCH     | /openmenus/:open_menu/menus/:menu
| DELETE    | /openmenus/:open_menu/menus/:menu
| GET       | /openmenus/:open_menu/menus/:menu/menugroups
| POST      | /openmenus/:open_menu/menus/:menu/menugroups
| GET       | /openmenus/:open_menu/menus/:menu/menugroups/:menu_group
| PATCH     | /openmenus/:open_menu/menus/:menu/menugroups/:menu_group
| DELETE    | /openmenus/:open_menu/menus/:menu/menugroups/:menu_group

## Project organization

* app/
  * scripts/
    * app.js - the basic app
    * init.js - requirejs configuration
    * main.js - starts the basic app
    * apps/
      * private/
        * private_app.js - allows you to create open menus [in progress!]
        * apps/ - private app sub-modules
          * open_menus/
          * menus/
      * public/
        * public_app.js - allows you to order menu items from open menus [to do!]
    * common/
    * entities/ - models, collections and request handlers
    * vendor/

## Selected dependencies

### Client-side

* backbone - for basic models, views, etc. backbone.marionette builds on this.
* backbone-forms - for generating HTML forms from Backbone models
* backbone.marionette - for modules, controllers, views, etc.
* backbone-relational - for keeping nested client-side models in sync
* handlebars - for templating
* requirejs - for asynchronous loading of client-side JavaScript

### Server-side

* express - for Node.js integration
* express-resource-new - for Rails-like server-side controllers
* mongodb - for data persistence
* mongoose - for server-side object modelling
