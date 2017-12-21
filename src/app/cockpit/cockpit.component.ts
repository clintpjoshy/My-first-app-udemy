import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component ({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})

export class CockpitComponent {
/* This talking between parent and children can also be achieved with a different approach using services.*/
/* just like @Input for sending data to the children we need @Output to send data to the parent. But since this is an emitter we also have to import EventEmitter form the core bundle and the data structure needs to be defined as well. This is shown below. And this can be sent to the parent as $event using the emit method that is in the EventEmitter class. based on clicks or whatever event that is triggered in the cockpit.component. @Output makes it available to the parent. Which will further sned it down to it's children such that it is available. */
  @Output() serverAdded = new EventEmitter<{serverName: string, serverContent: string}>(); 
  @Output() blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();

/* This is how we can access local reference using ViewChild decorator. Always pass the value of the attribute that is the local reference in the html as below. We can also access the component by passing the component type ex. @ViewChild(CockpitComponent) serverContentAdded : and so on. When an element is accessed via viewchild we can console.log(this.serverContentAdded) this will return the element type which is ElementRef in this case and add that value to the type of the element. and then it's value can be accessed */
  @ViewChild('serverContent') serverContentAdded: ElementRef;
  /*newServerName: string = '';*/
  /*newServerContent: string = '';*/

  addServer (serverInput: HTMLInputElement) {
//console.log(this.serverContentAdded);
    this.serverAdded.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentAdded.nativeElement.value
    });
  }
  addBlueprint (serverInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentAdded.nativeElement.value
    });
  }
}
