"use strict";
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var AppComponent = (function () {
    function AppComponent() {
        this.is_logging_in = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        alert("You are using: " + this.user.email);
    };
    AppComponent.prototype.toggle_logging_state = function () {
        this.is_logging_in = !this.is_logging_in;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <StackLayout>\n    <Image src=\"~/images/Kavi-Workspace.png\"></Image>\n      <TextField\n          hint=\"Email Address\"\n          keyboardType=\"email\"\n          autocorrect=\"false\"\n          [(ngModel)]=\"email\"\n          autocapitalizationType=\"none\">\n      </TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n      <Button [text]=\"is_logging_in ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n      <Button [text]=\"is_logging_in ? 'Sign up' : 'Back to login'\" (tap)= \"toggle_logging_state()\"></Button>\n    </StackLayout>\n  ",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [])
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