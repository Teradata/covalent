import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/components/components';
import { GuidedTourDemoBasicComponent } from './demos/guided-tour-demo-basic/guided-tour-demo-basic.component';
import { GuidedTourDemoBasicSharedModule } from './demos/guided-tour-demo-basic/guided-tour-basic-shared';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: GuidedTourDemoBasicComponent,
  id: 'guided-tour',
});

@NgModule({
  imports: [
    GuidedTourDemoBasicSharedModule,
    CommonModule,
    ComponentDetailsModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class GuidedTourDemoModule {}
