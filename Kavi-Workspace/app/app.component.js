"use strict";
var core_1 = require("@angular/core");
// import {RouteConfig} from "@angular/router-deprecated";
// import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
// import {LoginPage} from "./pages/login/login.component";
// import {Config} from "./shared/config";
// @Component({
//   selector: "main",
//   directives: [NS_ROUTER_DIRECTIVES],
//   providers: [NS_ROUTER_PROVIDERS],
//   template: "<page-router-outlet></page-router-outlet>"
// })
// @RouteConfig([
//   { path: "/Login", component: LoginPage, name: "Login", useAsDefault: !Config.hasActiveToken() },
//   { path: "/List", component: ListPage, name: "List", useAsDefault: Config.hasActiveToken() }
// ])
// export class AppComponent {}
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n<StackLayout>\n    <Label text=\"Tap the button\" class=\"title\"></Label>\n\n    <Button text=\"TAP\" (tap)=\"onTap()\"></Button>\n\n    <Label [text]=\"message\" class=\"message\" textWrap=\"true\"></Label>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map