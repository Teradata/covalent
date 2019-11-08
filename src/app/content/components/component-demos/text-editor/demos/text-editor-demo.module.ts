import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorDemoBasicComponent } from './text-editor-demo-basic/text-editor-demo-basic.component';
import { TextEditorDemoComponent } from '../../text-editor/text-editor.component';
import { TextEditorDemoRoutingModule } from './text-editor-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    TextEditorDemoComponent,
    TextEditorDemoBasicComponent
  ],
  imports: [
    DemoModule,
    TextEditorDemoRoutingModule,
    /** Covalent Modules */
    TextEditorDemoComponent,
    /** Angular Modules */
    CommonModule,
  ],
})
export class TextEditorDemoModule {}
