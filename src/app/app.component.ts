import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Frisbee Golf Storefront</h1>

    <!-- Feel free to remove everything below here except the router-outlet -->

    <hr />
    <p>
      Lets build a frisbee golf storefront! There are lots of different types of
      frisbees for frisbee golf and we need to organize them in a way that users
      can see what is for sale and help them pick the best frisbee to buy.
    </p>

    <p>
      Please see the README.md file for more instructions
    </p>
    <hr />

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = "CodeSandbox";
}
