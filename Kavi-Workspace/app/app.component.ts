
import {Component} from "@angular/core";
import {User} from "./shared/user/user"
import {UserService} from "./shared/user/user.service";


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;

  constructor(private _userService: UserService) {
    this.user = new User();
  }

  is_logging_in = true;
  submit() {
    if (this.is_logging_in) {
      this.login();
    } else {
      this.signup();
    }
  }
  login () {
    alert("Logging In");
  }

  signup() {
    this._userService.register(this.user)
  }

  toggle_logging_state() {
    this.is_logging_in = !this.is_logging_in
  }
};


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
