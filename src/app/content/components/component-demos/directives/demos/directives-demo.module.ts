import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoBasicComponent } from './directives-demo-basic/directives-demo-basic.component';
import { CovalentCommonModule } from '@covalent/core/common';
import { DirectivesDemoComponent } from './directives-demo.component';
import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    DirectivesDemoComponent,
    DirectivesDemoBasicComponent
  ],
  imports: [
    DemoModule,
    DirectivesDemoRoutingModule,
    /** Covalent Modules */
    CovalentCommonModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class DirectivesDemoModule {}
