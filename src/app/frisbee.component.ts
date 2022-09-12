import { Component, Input } from "@angular/core";
import { Frisbee } from "./frisbee";

@Component({
  selector: "app-frisbee",
  template: ` <p></p> `,
  styles: [``]
})
export class FrisbeeComponent {
  @Input() frisbee: Frisbee;
}
