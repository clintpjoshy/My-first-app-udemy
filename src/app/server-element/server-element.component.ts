import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  /** this is the property that is sent from the parent element as serverElement. Here this property is defined and made avaialble to this component. But even then it is not available because this property cannot be modified from a different component. If we want to assign a value to this property from app.component we need to use another decorator called @Input which is available in the 'angular/core' bundle. */
  @Input() element: {type: string, name: string, content: string};

  /* Sometimes we might want to use an alias to the above element. That can be done as follows
    @Input('srvElement') element: {type: string, name: string, content: string};
  Now this element will be aviable as srvElement outside of this component. element will no longer be available. That means when we bind a value to a property in app.component element is not avaialable anymore for in the *ngFor we need to use srvElement*/

  constructor() {
  }

  ngOnInit() {
  }

}
