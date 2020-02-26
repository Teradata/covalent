import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormatterDemoBasicComponent } from './json-formatter-demo-basic/json-formatter-demo-basic.component';
import { CovalentJsonFormatterModule } from '@covalent/core/json-formatter';
import { JsonFormatterDemoComponent } from './json-formatter-demo.component';
import { JsonFormatterDemoRoutingModule } from './json-formatter-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [JsonFormatterDemoComponent, JsonFormatterDemoBasicComponent],
  imports: [
    DemoModule,
    JsonFormatterDemoRoutingModule,
    /** Covalent Modules */
    CovalentJsonFormatterModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class JsonFormatterDemoModule {}
