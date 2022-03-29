import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextEditorDemoComponent } from './text-editor-demo.component';

const routes: Routes = [
  {
    path: '',
    component: TextEditorDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextEditorDemoRoutingModule {}
