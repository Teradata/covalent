import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionsDemoBasicComponent } from './functions-demo-basic/functions-demo-basic.component';
import { FunctionsDemoComponent } from './functions-demo.component';
import { FunctionsDemoRoutingModule } from './functions-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [FunctionsDemoComponent, FunctionsDemoBasicComponent],
  imports: [
    DemoModule,
    FunctionsDemoRoutingModule,
    /** Covalent Modules */
    /** Angular Modules */
    CommonModule,
  ],
})
export class FunctionsDemoModule {}
