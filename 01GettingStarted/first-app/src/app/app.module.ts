import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";

@NgModule({
  // we do register mew component in this declarations array.
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent], // bootstrap array which basically lists all the components
})
export class AppModule {}
