import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
/*this is the first file that's triggered. This checks for envs and all the other configs.*/ 
/*Also note that it imports our app.module.ts as AppModule. Now the bootsrapModule function fires AppModule which is the code in app.module.ts (got to app.module file).*/
