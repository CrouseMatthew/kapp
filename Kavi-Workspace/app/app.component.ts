import {Component} from "@angular/core";
import {User} from "./shared/user/user"


@Component({
  selector: "my-app",
  template: `
    <StackLayout>
    <Image src="~/images/Kavi-Workspace.png"></Image>
      <TextField
          hint="Email Address"
          keyboardType="email"
          autocorrect="false"
          [(ngModel)]="user.email"
          autocapitalizationType="none">
      </TextField>
      <TextField hint="Password" secure="true" [(ngModel)] = "user.password></TextField>
      <Button [text]="is_logging_in ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
      <Button [text]="is_logging_in ? 'Sign up' : 'Back to login'" (tap)= "toggle_logging_state()"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;

  constructor() {
    this.user = new User();
  }

  is_logging_in = true;
  submit() {
    alert("You are using: " + this.user.email);
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
