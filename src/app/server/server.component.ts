import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})

export class ServerComponent {
  serverId: number = 10;
  serverName: string = 'Server 1';
  severStatus: string = 'Online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online': 'Offline';
  }

  getServerStatus (): string {
    return this.serverStatus;
  }

  getServerName = function(): string {
    return this.serverName;
  }

  getColor(): string {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
