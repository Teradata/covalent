import { NgModule } from '@angular/core';

import { componentRoutes } from './components.routes';
import { ComponentOverviewModule } from '../shared/component-overview/component-overview.module';

@NgModule({
  imports: [ComponentOverviewModule, componentRoutes],
})
export class ComponentsModule {}
