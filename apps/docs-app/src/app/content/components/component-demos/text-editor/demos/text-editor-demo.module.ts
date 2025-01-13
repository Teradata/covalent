import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorDemoBasicComponent } from './text-editor-demo-basic/text-editor-demo-basic.component';
import { TextEditorDemoComponent } from './text-editor-demo.component';
import { TextEditorDemoRoutingModule } from './text-editor-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';
import { TdTextEditorComponent } from '@covalent/text-editor';

@NgModule({
  declarations: [TextEditorDemoComponent, TextEditorDemoBasicComponent],
  imports: [
    DemoModule,
    TextEditorDemoRoutingModule,
    /** Covalent Modules */
    TdTextEditorComponent,
    /** Angular Modules */
    CommonModule,
    FormsModule,
  ],
})
export class TextEditorDemoModule {}
