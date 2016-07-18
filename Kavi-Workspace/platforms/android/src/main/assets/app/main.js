"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
// import firebase = require("nativescript-plugin-firebase");
// firebase.init({
//   // Optionally pass in properties for database, authentication and cloud messaging,
//   // see their respective docs.
// }).then(
//   (instance) => {
//     console.log("firebase.init done");
//   },
//   (error) => {
//     console.log("firebase.init error: " + error);
//   }
// );
application_1.nativeScriptBootstrap(app_component_1.AppComponent);
//# sourceMappingURL=main.js.map