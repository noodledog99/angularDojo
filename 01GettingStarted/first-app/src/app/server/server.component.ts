import { Component } from "@angular/core";

// We can set up some important information which will be stored as metadata for this class in the background then which will tell Angular what to do this class

@Component({
  // you're able to use this component later in your other components templete.
  // selector should be unique selector.
  // prefix it with app- and then a filling name.
  selector: "app-server",
  // templateUrl can also be a function which returns the URL of an HTML template to be loaded and used for the directive
  templateUrl: "./server.component.html",
})
export class ServerComponent {}
