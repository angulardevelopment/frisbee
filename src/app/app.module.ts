import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FrisbeeComponent } from "./frisbee.component";
import { FrisbeeListComponent } from "./frisbee-list.component";
import { FrisbeeDetailComponent } from "./frisbee-detail.component";
import { AppComponent } from "./app.component";
import { FrisbeeService } from "./frisbee.service";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FrisbeeComponent,
    FrisbeeListComponent,
    FrisbeeDetailComponent
  ],

  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [FrisbeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
