import {Component} from "@angular/core";
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





@Component({
    selector: "my-app",
    template: `
<StackLayout>
    <Label text="Tap the button" class="title"></Label>

    <Button text="TAP" (tap)="onTap()"></Button>

    <Label [text]="message" class="message" textWrap="true"></Label>
</StackLayout>
`,
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;
    }
}
