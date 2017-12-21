import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
/*export class ServersComponent implements OnInit {*/
export class ServersComponent {
  allowServer: boolean = false;
  newServerAdded: string = 'No new server added!';
  userInput: string = '';
  addServer: boolean = false;
  servers: string[] = ['server1', 'server 2'];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    } ,2000);
  } /*end constructor*/

 /* ngOnInit() {
  }*/
    onCreateNewServer() {
      this.newServerAdded = 'One new server added!! ' + this.userInput + '.';
      this.addServer = true;
      this.servers.push(this.userInput);
    }

    /*2-way binding technicque without using angular's 2 way binding */
    onUserInput(event) {
      console.log(event.target.value);
      this.userInput = event.target.value;
    }
  }
}
