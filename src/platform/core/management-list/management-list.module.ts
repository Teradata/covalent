import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CovalentCommonModule } from '../common/common.module';
import { TdManagementListComponent } from './management-list';
export { TdManagementListComponent, IHeaders, OrderBy } from './management-list';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    CovalentCommonModule.forRoot(),
  ],
  declarations: [
    TdManagementListComponent,
  ],
  exports: [
    TdManagementListComponent,
  ],
})
export class CovalentManagementListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentManagementListModule,
      providers: [ TdManagementListComponent ],
    };
  }
}
