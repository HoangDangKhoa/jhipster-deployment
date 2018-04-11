import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { DeploymentAppModuleNgFactory } from '../../../../target/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(DeploymentAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
