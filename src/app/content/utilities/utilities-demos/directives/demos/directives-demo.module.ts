import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoBasicComponent } from './directives-demo-basic/directives-demo-basic.component';
import { CovalentCommonModule } from '@covalent/core/common';
import { DirectivesDemoComponent } from './directives-demo.component';
import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DirectivesDemoComponent, DirectivesDemoBasicComponent],
  imports: [
    DemoModule,
    CommonModule,
    MatInputModule,
    DirectivesDemoRoutingModule,
    MatFormFieldModule,
    /** Covalent Modules */
    CovalentCommonModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
  ],
})
export class DirectivesDemoModule {}
