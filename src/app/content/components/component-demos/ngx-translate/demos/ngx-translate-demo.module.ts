import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateDemoBasicComponent } from './ngx-translate-demo-basic/ngx-translate-demo-basic.component';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateDemoComponent } from './ngx-translate-demo.component';
import { NgxTranslateDemoRoutingModule } from './ngx-translate-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    NgxTranslateDemoComponent,
    NgxTranslateDemoBasicComponent
  ],
  imports: [
    DemoModule,
    NgxTranslateDemoRoutingModule,
    /** Covalent Modules */
    /** Angular Modules */
    CommonModule,
  ],
  providers: [TranslateService]
})
export class NgxTranslateDemoModule {}
