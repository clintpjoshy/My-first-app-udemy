import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*Once main.ts fires the bootstrap AppModule this code runs. The same process is repeated here and app.component.ts is imported to this file as AppComponent and this file is bootstraped above. This executes the code in app.component.ts (go to this file).*/
/* there are 4 items in the NgModule decorator. All the components that are created by us needs to be passed into the declarations array. Any modules that are built into angular needs to be passed into the imports array. Bootstrap array is the initializer. When the code is triggered it looks in bootstrap to check which component needs to be run when the code is bootstraped. Also it is important to import all the different modules and components. These are typescript features.*/
