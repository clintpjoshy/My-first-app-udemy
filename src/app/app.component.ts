import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** this array is used for a for loop to display the server-element component and each server-element will display each item of the below array. And the value that needs to be displayed in each server-element is passed from this component. We cannot use this directly becasue the properties of each component is available to itself. So we can use property binding to pass in the current value to the any other component. Check html and server-element components for further details */
  serverElements: any = [{type: 'Server', name: 'Server1', content: 'Testing Server'}, {type: 'Server', name: 'Server2', content: 'Testing Server2'}];

  /*custom events needs to be listened such that it can be shared with children components. In this case we are display  severElements array from above in the server-element component. This can be done by property binding. To send this data from cockpit then it needs to be sent to the parent and then it should be send to children using property binding. Check app.component.html*/
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'Server',
      content: serverData.serverContent,
      name: serverData.serverName
    });

  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'Blueprint',
      content: blueprintData.serverContent,
      name: blueprintData.serverName
    })
  }
}
/*This is the component file and component sees the component name defined in the selector `selector` in the browser it knows to inject or render this component and its corresponding html.*/
