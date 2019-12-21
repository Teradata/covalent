import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDemoBasicComponent } from './search-demo-basic/search-demo-basic.component';
import { CovalentSearchModule } from '@covalent/core/search';
import { SearchDemoComponent } from './search-demo.component';
import { SearchDemoRoutingModule } from './search-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [SearchDemoComponent, SearchDemoBasicComponent],
  imports: [
    DemoModule,
    SearchDemoRoutingModule,
    /** Covalent Modules */
    CovalentSearchModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class SearchDemoModule {}
