import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FrisbeeListComponent } from "./frisbee-list.component";
import { FrisbeeDetailComponent } from "./frisbee-detail.component";

const routes: Routes = [
  { path: "frisbees", component: FrisbeeListComponent },
  { path: "frisbees/:id", component: FrisbeeDetailComponent },
  { path: "**", redirectTo: "frisbees" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
