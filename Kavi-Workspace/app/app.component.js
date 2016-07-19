"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.is_logging_in = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.is_logging_in) {
            this.login();
        }
        else {
            this.signup();
        }
    };
    AppComponent.prototype.login = function () {
        alert("Logging In");
    };
    AppComponent.prototype.signup = function () {
        this._userService.register(this.user);
    };
    AppComponent.prototype.toggle_logging_state = function () {
        this.is_logging_in = !this.is_logging_in;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
// @Component({
//     selector: "my-app",
//     template: `
// <StackLayout>
//     <Label text="Tap the button" class="title"></Label>
//     <Button text="TAP" (tap)="onTap()"></Button>
//     <Label [text]="message" class="message" textWrap="true"></Label>
// </StackLayout>
// `,
// })
// export class AppComponent {
//     public counter: number = 16;
//     public get message(): string {
//         if (this.counter > 0) {
//             return this.counter + " taps left";
//         } else {
//             return "Hoorraaay! \nYou are ready to start building!";
//         }
//     }
//     public onTap() {
//         this.counter--;
//     }
// }
//# sourceMappingURL=app.component.js.map