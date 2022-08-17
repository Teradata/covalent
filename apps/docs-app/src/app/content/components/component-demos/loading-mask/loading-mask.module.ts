import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { LoadingMaskDemoSharedModule } from './demos/loading-mask-demo-basic/loading-mask-demo-basic.shared';
import { LoadingMaskDemoBasicComponent } from './demos/loading-mask-demo-basic/loading-mask-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LoadingMaskDemoBasicComponent,
  id: 'loading-mask',
});

@NgModule({
  imports: [
    LoadingMaskDemoSharedModule,
    ComponentDetailsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoadingMaskDemoModule {}
