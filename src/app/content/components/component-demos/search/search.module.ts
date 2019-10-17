import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentSearchModule } from '@covalent/core/search';
import { setComponentRoutes } from 'app/content/components/components';
import { SearchDemoComponent } from './search.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: SearchDemoComponent,
  id: 'search',
});

@NgModule({
  declarations: [SearchDemoComponent],
  imports: [
    CommonModule,

    // Material
    ComponentDetailsModule,
    // Covalent
    CovalentSearchModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class SearchDemoModule {}
