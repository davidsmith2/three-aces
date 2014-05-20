# Three Aces

**Note:** This project is under development. As such, the following should be considered notes rather than "official" documentation.

This project is an attempt to build a larger-scale, more-complex JavaScript application than the avergae tutorial describes using REST/MVC principles. The app is based upon the OpenMenu specification, a kind of data schema for the restaurant industry. My aim is to create two and possibly three sub-apps:

* an app that allows restaurant owners to create open menus for their restaurant(s) [required]
* an app that allows customers to order menu items from open menus [required]
* a monitoring app of some kind [possible]

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
