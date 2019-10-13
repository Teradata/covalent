import { NgModule } from '@angular/core';

import { ComponentOverviewModule } from '../../components/shared/component-overview/component-overview.module';
import { utilitiesRoutes } from './utilities.routes';

@NgModule({
  imports: [ComponentOverviewModule, utilitiesRoutes],
})
export class UtilitiesModule {}
